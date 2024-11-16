type ConditionalClass = {
  if: boolean;
  classes: string;
};

type StyleConfig = {
  [key: string]: string | ConditionalClass;
};

export const tw = (config: StyleConfig): string => {
  const classes: string[] = [];

  for (const key in config) {
    const value = config[key];

    if (typeof value === "string") {
      classes.push(value);
    } else if (typeof value === "object" && value.if) {
      classes.push(value.classes);
    }
  }

  return classes.join(" ");
};
