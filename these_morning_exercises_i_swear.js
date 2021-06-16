// let defangIPaddr = function(address) {
//     return address.split('.').join('[.]');
// };

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
const y = (anArray) => {
    return anArray.name === "kumar"
};

x = anArray.find(y).desc;

console.log(x);