type Props = {
  name: string;
  title: string;
  img: string;
};

class Employee {
  name: string;
  title: string;
  img: string;

  constructor({ name, title, img }: Props) {
    this.name = name;
    this.title = title;
    this.img = img;
  }
}

export const james = new Employee({
  name: "James King",
  title: "President and CEO",
  img: "",
});

export const julie = new Employee({
  name: "Julie Taylor",
  title: "VP of Marketing",
  img: "",
});

export const eugene = new Employee({
  name: "Eugene Lee",
  title: "CFO",
  img: "",
});

export const john = new Employee({
  name: "John Williams",
  title: "VP of Engineering",
  img: "",
});
export const ray = new Employee({
  name: "Ray Moore",
  title: "VP of Sales",
  img: "",
});
export const paul = new Employee({
  name: "Paul Jones",
  title: "QA Manager",
  img: "",
});
