type NavItem ={
    label: string;
    link: string;
    children?: NavItem[];
}
const navItems : NavItem[] =[
    {
        label:'dropdown 1',
        link:'#',
        children:[
            {
                label: "hello",
                link: "#"
            },
            {
                label:"Hello2",
                link: "#"
            }
        ]
    }
]