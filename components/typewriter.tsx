"use client";

import { useEffect, useState } from "react";

const TYPE_SPEED_MS = 150;
const DELETE_SPEED_MS = 90;
const PAUSE_MS = 1800;

type TypewriterProps = {
  text: string;
  className?: string;
};

export function Typewriter({ text, className }: TypewriterProps) {
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const atFullText = !deleting && display === text;
    const atEmpty = deleting && display === "";

    const delay = atFullText ? PAUSE_MS : deleting ? DELETE_SPEED_MS : TYPE_SPEED_MS;

    const timeout = window.setTimeout(() => {
      if (atFullText) {
        setDeleting(true);
      } else if (atEmpty) {
        setDeleting(false);
      } else {
        setDisplay(deleting ? text.slice(0, display.length - 1) : text.slice(0, display.length + 1));
      }
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [display, deleting, text]);

  return (
    <span className="inline-block" style={{ minWidth: `${text.length}ch` }}>
      <span aria-hidden="true" className={className}>
        {display}
        <span className="animate-pulse">|</span>
      </span>
      <span className="sr-only">{text}</span>
    </span>
  );
}
