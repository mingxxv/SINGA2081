let defangIPaddr = function(address) {
    return address.split('.').join('[.]');
};

anArray = [
    {
        name: "boddy",
        desc: "yo wassup",
    },
    {
        name: "kumar",
        desc: "lalalala",
    },
];

x = anArray.find(name);

console.log(x);