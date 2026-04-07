function juraganApp() {
    return {
        category: 'sayur',
        showCart: false,
        lightboxOpen: false,
        activeImg: '',
        cart: [],
        galleryImages: [
           'https://cdn0-production-images-kly.akamaized.net/UG90xfL17kRLsRkstY-D9--Cagk=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/5373905/original/006701500_1759833571-Gemini_Generated_Image_r0b5shr0b5shr0b5.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7op2p0CY5W6A07mnU02kvUMUwJ10qsc65Lg&s',
            'https://i.pinimg.com/736x/d6/2f/01/d62f013232e7779e94947c366c6d1f3c.jpg',
            'https://st.depositphotos.com/1020341/2219/i/950/depositphotos_22196809-stock-photo-fruit-market-with-various-colorful.jpg'
        ],
        products: [
            { id: 1, name: 'Brokoli Hijau', price: 12000, type: 'sayur', image: 'https://asset.kompas.com/crops/EBaP9ZEJxOlosKQDwh27jj5jVgI=/61x62:968x667/1200x800/data/photo/2021/06/21/60d09fef0108e.jpg' },
            { id: 2, name: 'Cabai Keriting Merah', price: 8000, type: 'bumbu', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXZ0XzuEk6rbzhevapzfhjmxOGDY9t9vDhJQ&s' },
            { id: 3, name: 'Paket Sop Komplit', price: 10000, type: 'paket', image: 'https://www.redaksiku.com/wp-content/uploads/2024/09/a021c1c5-7cca-4c7b-be6a-927cb4aa0771-fotor-bg-remover-20240920115932_11zon.png' },
            { id: 4, name: 'Wortel', price: 9000, type: 'sayur', image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400' },
            { id: 5, name: 'Bawang Merah ', price: 15000, type: 'bumbu', image: 'https://images.unsplash.com/photo-1508747703725-719777637510?w=400' },
            { id: 6, name: 'Paket Sayur Asem', price: 12000, type: 'paket', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC80K802Gl3NEbbuqu8z8Ba8SZC8vqR6rOMA&s' },
            { id: 7, name: 'Gubis Hijau', price: 5000, type: 'sayur', image: 'https://awsimages.detik.net.id/customthumb/2011/05/20/900/Cabbagectt.jpg?w=600&q=90' },
            { id: 8, name: 'Cabai Kecil', price: 18000, type: 'bumbu', image: 'https://jangkausayur.com/cdn/shop/products/crm_580x.jpg?v=1680442331' },
            { id: 9, name: 'Paket Sayur Lodeh', price: 15000, type: 'paket', image: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Lodeh.jpg' },
            { id: 10, name: 'Buncis Segar', price: 7000, type: 'sayur', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg7JEkVjZoG67T1QaasCF2qr0FSsXYbc30Tw&s' },
            { id: 11, name: 'Tomat Merah', price: 5000, type: 'bumbu', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTseXv78Wc0dabLV5rvQ6__EdpyRP5JMs7ULg&s' },
            { id: 12, name: 'Paket Kuah Bening', price: 10000, type: 'paket', image: 'https://asset.kompas.com/crops/Z8cVllBpl_a6RtoL0ifahrbAOeI=/106x75:906x608/750x500/data/photo/2022/05/07/627600fb60dc3.jpg' }
        ],
        addToCart(product) {
            let item = this.cart.find(i => i.id === product.id);
            if (item) {
                item.qty++;
            } else {
                this.cart.push({ ...product, qty: 1 });
            }
            this.showCart = true;
        },
        updateQty(id, delta) {
            let item = this.cart.find(i => i.id === id);
            if (item) {
                item.qty += delta;
                if (item.qty <= 0) {
                    this.cart = this.cart.filter(i => i.id !== id);
                }
            }
        },
        totalPrice() {
            return this.cart.reduce((s, i) => s + (i.price * i.qty), 0);
        },
        formatCurrency(v) {
            return 'Rp ' + v.toLocaleString('id-ID');
        },
        openLightbox(img) {
            this.activeImg = img;
            this.lightboxOpen = true;
        },
        checkout() {
            let msg = "*PESANAN BARU - JURAGAN SAYUR*\n\n";
            this.cart.forEach(i => {
                msg += `- *${i.name}* (${i.qty}x)\n`;
            });
            msg += `\n*TOTAL: ${this.formatCurrency(this.totalPrice())}*`;
            window.open(`https://wa.me/628123456789?text=${encodeURIComponent(msg)}`, '_blank');
        }
    }
}