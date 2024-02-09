type Props = {
  name: string;
  title: string;
  img: string;
  officePhone: string;
  mobilePhone: string;
  email: string;
};

export class Employee {
  name: string;
  title: string;
  img: string;
  officePhone: string;
  mobilePhone: string;
  email: string;

  constructor({ name, title, img, officePhone, mobilePhone, email }: Props) {
    this.name = name;
    this.title = title;
    this.img = img;
    this.officePhone = officePhone;
    this.mobilePhone = mobilePhone;
    this.email = email;
  }
}

const kim = new Employee({
  name: "Kim Possible",
  title: "President and CEO",
  img: "imgs/kim.png",
  officePhone: "781-000-0001",
  mobilePhone: "617-000-0001",
  email: "kim@company.com",
});

const ron = new Employee({
  name: "Ron Stoppable",
  title: "VP of Marketing",
  img: "imgs/ron.png",
  officePhone: "781-000-0002",
  mobilePhone: "617-000-0002",
  email: "ron@company.com",
});

const monique = new Employee({
  name: "Monique Lee",
  title: "CFO",
  img: "imgs/monique.png",
  officePhone: "781-000-1233",
  mobilePhone: "617-000-1233",
  email: "monique@company.com",
});

const shego = new Employee({
  name: "Shego Williams",
  title: "VP of Engineering",
  img: "imgs/shego.png",
  officePhone: "781-000-2020",
  mobilePhone: "617-000-2020",
  email: "john@company.com",
});

const rufus = new Employee({
  name: "Rufus Moore",
  title: "VP of Sales",
  img: "imgs/rufus.png",
  officePhone: "781-000-2999",
  mobilePhone: "617-000-2999",
  email: "ray@company.com",
});

const wade = new Employee({
  name: "Wade Jones",
  title: "QA Manager",
  img: "imgs/wade.png",
  officePhone: "781-000-9347",
  mobilePhone: "617-000-9347",
  email: "paul@company.com",
});

export const allEmployees = [kim, ron, monique, shego, rufus, wade];
