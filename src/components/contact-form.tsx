"use client";

import { useState, type FormEvent } from "react";

type FormState = "idle" | "sending" | "success" | "error";

const ACCESS_KEY = "e2e299de-a549-4346-9d42-fcb687db6ac4";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [subject, setSubject] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("access_key", ACCESS_KEY);
    formData.set("from_name", String(formData.get("name") ?? ""));
    formData.set("subject", subject.trim());

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Your message could not be sent. Please try again.");
      }

      form.reset();
      setSubject("");
      setState("success");
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again or email me directly.",
      );
      setState("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-xs font-medium uppercase tracking-widest text-muted">Your name</span>
          <input
            autoComplete="name"
            name="name"
            required
            maxLength={100}
            placeholder="Jane Smith"
            className="w-full border-0 border-b border-ink/25 bg-transparent px-0 py-3 text-base outline-none transition-colors placeholder:text-muted/60 focus:border-ink"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-xs font-medium uppercase tracking-widest text-muted">Email address</span>
          <input
            autoComplete="email"
            name="email"
            type="email"
            required
            maxLength={254}
            placeholder="jane@example.com"
            className="w-full border-0 border-b border-ink/25 bg-transparent px-0 py-3 text-base outline-none transition-colors placeholder:text-muted/60 focus:border-ink"
          />
        </label>
      </div>
      <label className="block">
        <span className="mb-2 block text-xs font-medium uppercase tracking-widest text-muted">Subject</span>
        <input
          name="subject"
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
          required
          maxLength={150}
          placeholder="What would you like to discuss?"
          className="w-full border-0 border-b border-ink/25 bg-transparent px-0 py-3 text-base outline-none transition-colors placeholder:text-muted/60 focus:border-ink"
        />
      </label>
      <label className="block">
        <span className="mb-2 block text-xs font-medium uppercase tracking-widest text-muted">Message</span>
        <textarea
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={5}
          placeholder="A little context goes a long way..."
          className="w-full resize-y border-0 border-b border-ink/25 bg-transparent px-0 py-3 text-base leading-7 outline-none transition-colors placeholder:text-muted/60 focus:border-ink"
        />
      </label>
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <div className="flex flex-col items-start gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={state === "sending"}
          className="inline-flex items-center gap-3 bg-ink px-6 py-4 text-sm font-medium text-paper transition-opacity hover:opacity-80 disabled:cursor-wait disabled:opacity-50"
        >
          {state === "sending" ? "Sending..." : "Send message"}
          <span aria-hidden="true">↗</span>
        </button>
        <p className="text-xs leading-6 text-muted">Your details are used only to respond to your enquiry.</p>
      </div>
      <p aria-live="polite" role="status" className="min-h-6 text-sm">
        {state === "success" && <span className="text-green-700">Message sent. Thanks for reaching out — I’ll be in touch.</span>}
        {state === "error" && <span className="text-red-700">{errorMessage}</span>}
      </p>
    </form>
  );
}
