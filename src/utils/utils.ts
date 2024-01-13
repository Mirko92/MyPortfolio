type ConditionalClass = {
  [key:string]: boolean;
}

type ConditionalClasses = (string|ConditionalClass)[];

export function composeClass(...items: ConditionalClasses): string {
  if (!Array.isArray(items)) throw "ComposeClass accept only array of ConditionalClass as input.";
  
  return items.reduce( (a: string,x) => {
    let value = a; 

    if (typeof x === "string") {
      value += x;
    } 
    else if (x instanceof Object) {
      for (const key in x) {
        if (x[key]) {
          value += ` ${key}`;
        }
      }
    }

    return value;
  }, "")
}