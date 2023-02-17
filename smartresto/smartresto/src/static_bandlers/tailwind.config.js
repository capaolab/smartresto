/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../templates/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        skin: {
            base: "var(--color-base)",
            primary: "var(--color-primary)",
            secundary: "var(--color-secundary)",
            tertiary: "var(--color-tertiary)",
            quaternary: "var(--color-quaternary)",
            inverted: "var(--color-inverted)",
            highlight: "var(--color-highlight)",
            disabled: "var(--color-disabled)",
            error: "var(--color-error)",
            warning: "var(--color-warning)",
        },
    },
    textColor: {
        skin: {
            base: "var(--color-base)",
            primary: "var(--color-primary)",
            secundary: "var(--color-secundary)",
            tertiary: "var(--color-tertiary)",
            quaternary: "var(--color-quaternary)",
            inverted: "var(--color-inverted)",
            highlight: "var(--color-highlight)",
            disabled: "var(--color-disabled)",
            error: "var(--color-error)",
            warning: "var(--color-warning)",
        },
    },
    borderColor: {
        skin: {
            base: "var(--color-base)",
            primary: "var(--color-primary)",
            secundary: "var(--color-secundary)",
            tertiary: "var(--color-tertiary)",
            quaternary: "var(--color-quaternary)",
            inverted: "var(--color-inverted)",
            highlight: "var(--color-highlight)",
            disabled: "var(--color-disabled)",
            error: "var(--color-error)",
            warning: "var(--color-warning)",
        },
    },
    ringColor: {
        skin: {
            base: "var(--color-base)",
            primary: "var(--color-primary)",
            secundary: "var(--color-secundary)",
            tertiary: "var(--color-tertiary)",
            quaternary: "var(--color-quaternary)",
            inverted: "var(--color-inverted)",
            highlight: "var(--color-highlight)",
            disabled: "var(--color-disabled)",
            error: "var(--color-error)",
            warning: "var(--color-warning)",
        },
      },
    },
  },
  plugins: [],
}
