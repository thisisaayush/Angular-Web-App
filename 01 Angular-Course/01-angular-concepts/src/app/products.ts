export interface Product{
    id: number;
    name: string;
    price: number;
    description: string;
}

export const products =[
    {
        id: 1,
        name: 'Phone XL',
        price: 799,
        description: 'A large phone with large screen.'
    },

    {
        id: 2,
        name: 'Phone Mini',
        price: 699,
        description: 'A great phone with good camera and memory storage.'
    },

    {
        id: 3,
        name: 'Phone Standard',
        price: 599,
        description: 'A good phone with standard internal features.'
    },

    {
        id: 4,
        name: 'Phone Gold',
        price: 899,
        description: 'A phone with extended features and functionality.'
    },

    {
        id: 5,
        name: 'Phone Pro',
        price: 999,
        description: ''
    }
]