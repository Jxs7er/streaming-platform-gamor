const colors = [`green`, `amber`, `blue`, `red`, `yellow`, `purple`, `gray`];

export const assignColorsByLetter = (name) =>
  colors[name.charCodeAt(0) % colors.length];
