# Bullet Point Style Guide for Careers Pages

## Purpose
To ensure all job/career-related pages use a consistent and accessible bullet point style.

## Standard Bullet Style
- Use the em dash (—) as the bullet symbol.
- Use the following JSX for each bullet point:

```jsx
<div className="flex items-start">
  <span className="text-[#FF3D22] font-bold mr-2">—</span>
  <p>Your bullet point text goes here.</p>
</div>
```

## Example
```jsx
<div className="flex items-start">
  <span className="text-[#FF3D22] font-bold mr-2">—</span>
  <p>Lead a high-performing team to deliver results.</p>
</div>
```

## Usage
- Apply this pattern to all bullet lists in job descriptions, requirements, responsibilities, and similar sections across all files in `src/pages/careers/`.
- Do not use hyphen (-) or other symbols for bullets.
- Keep spacing consistent (`mr-2`), and use the same color and font-weight for the dash.

---

**Reference this file when creating or reviewing bullet lists for new or existing career pages.**
