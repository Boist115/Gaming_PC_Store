class Product {
    constructor(id, name, cpu, gpu, ram, storage, price, stock) {
        this.id = id;
        this.name = name;
        this.cpu = cpu;
        this.gpu = gpu;
        this.ram = ram;
        this.storage = storage;
        this.price = price;
        this.stock = stock;
    }
}
const products = [
    new Product(1, 'Starter Gaming PC', 'Ryzen 5 7600',
        'RTX 5060', '16GB', '1TB SSD', 999.99, 5),

    new Product(2, 'Mid-Range Gaming PC', 'Ryzen 7 7700',
        'RTX 5070', '32GB', '1TB SSD', 1499.99, 4),

    new Product(3, 'High-End Gaming PC', 'Ryzen 7 9800X3D',
        'RTX 5080', '32GB', '2TB SSD', 2499.99, 2)
];

function getAllProducts() {
    return products;
}

module.exports = { Product, getAllProducts };