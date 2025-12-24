
export type NavItem = {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
};


export const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Our Products",
    href: "/products", 
    dropdown: [
      { label: "Savings", href: "/products/savings" },
      { label: "Loans", href: "/products/loans" },
      { label: "Investments", href: "/products/investments" },
    ],
  },
  {
    label: "Job Pool",
    href: "/jobs", 
    dropdown: [
      { label: "Find Jobs", href: "/jobs/job-pool" },
      { label: "Post a Job", href: "/jobs/post" },
    ],
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
  {
    label: "Faqs",
    href: "/faqs",
  },
];



export type jobs = {
  label: string;
  href: string;

};

//jobs link data

export const job: jobs[] = [
   {
    label: "Home",
    href: "/jobs", 
  },
  {
    label: "Jobs Pool",
    href: "/jobs/job-pool", 
  },
  {
    label: "My Application",
    href: "/jobs/application", 
  },
  {
    label: "Profile",
    href: "/jobs/profile",
  },
  
];


