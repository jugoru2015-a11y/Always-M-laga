// Modal Logic

const modalOverlay = document.getElementById('modal-overlay');
const closeBtn = document.querySelector('.close-modal');
const modalBody = document.getElementById('modal-body');

const modalData = {
    'mercado-salamanca': {
        title: 'Mercado de Salamanca (El Molinillo)',
        text: `
            <p>Mercado de Salamanca is a neighbourhood market where daily shopping is part of a routine rather than an experience. Stalls sell fresh produce, meat, fish, and local products, and many customers come regularly, often knowing the vendors by name.</p>
            <p>The market opened in 1925 and is a notable example of Neo-Mudéjar architecture, with its distinctive brick façade. Located in the Molinillo neighbourhood, it was built to serve local residents and has remained closely tied to everyday life in the area for nearly a century.</p>
            <p>Historically, markets like this have played an important role in Málaga’s neighbourhood life, not only as places to buy food but also as social spaces. Conversations, greetings, and small exchanges are part of the visit.</p>
            <p>Today, the Mercado de Salamanca continues to reflect a way of life based on proximity, trust, and human interaction, in contrast to faster, more anonymous forms of shopping.</p>
            <p>However, some stalls are closed, showing how parts of this market have slowly disappeared over time.</p>
        `,
        mainImage: 'images/portada-mercado.jpeg',
        mainCaption: 'Photo by Julia González Ruiz',
        gallery: [
            { src: 'images/puesto-mercado.jpeg', caption: 'Photo by Julia González Ruiz' },
            { src: 'images/interior-mercado.jpeg', caption: 'Photo by Julia González Ruiz' }
        ]
    },
    'gazpachuelo': {
        title: 'Gazpachuelo',
        text: `
            <p>Gazpachuelo is a traditional homemade soup from Málaga. It is made with a simple fish broth, potatoes, and a warm mayonnaise added at the end, which gives the dish its creamy texture. Because of this, it requires care when preparing it, especially when mixing the mayonnaise so it does not curdle.</p>
            <p>Historically, gazpachuelo was eaten in working-class households, especially during colder months. It was a practical and nourishing dish, made with accessible ingredients and cooked regularly at home rather than in restaurants.</p>
            <p>Today, gazpachuelo remains strongly linked to family kitchens and everyday meals. It is rarely found on menus and is mostly passed down through practice, making it a clear example of Málaga’s domestic food tradition.</p>
        `,
        mainImage: 'images/gazpachuelo.jpeg',
        mainCaption: 'Photo by Julia González Ruiz',
        gallery: []
    },
    'venta-montes': {
        title: 'A venta in the Montes de Málaga',
        text: `
            <p>Going to a venta in the Montes de Málaga is a long-standing local habit. Ventas are rural roadside places across Andalucía; the name comes from vender (“to sell”) because they originally functioned as small countryside shops for local farmers, and later became restaurants.</p>
            <p>The food is homemade and filling, with generous portions and traditional dishes rather than anything “fancy.” Many menus are strongly meat-based, and typical plates include plato de los montes (with chorizo, lomo, morcilla, fries, fried green peppers, and a fried egg), migas, lomo con manteca, and winter platos de cuchara like lentejas or puchero.</p>
            <p>Although ventas are open all year, their busiest season is usually autumn to spring. Locals drive up to the mountains for a long meal and often stay for the afternoon, an easy plan linked to weekends, family gatherings, and time together.</p>
        `,
        mainImage: 'images/venta.jpeg',
        mainCaption: 'Photo by Julia González Ruiz',
        gallery: []
    },
    'borrachuelos': {
        title: 'Borrachuelos',
        text: `
            <p>Borrachuelos are traditional Málaga pastries made with fried wheat dough, flavoured with wine or aguardiente. The name comes from Spanish: borracho means “drunk,” so borrachuelos literally refers to the fact that the dough is “slightly boozy” because it includes a small amount of alcohol.</p>
            <p>They are especially common in winter and around Christmas, often prepared at home following family recipes passed down over generations. Unlike many bakery sweets, they are closely linked to domestic cooking and shared preparation, usually made in large quantities to share with family and neighbours.</p>
            <p>They are closely related to pestiños (a very similar dough and frying method) and are typically finished with sugar. With centuries of history, they are also traditionally linked to religious celebrations, which is why they appear not only at Christmas but also around Semana Santa.</p>
        `,
        mainImage: 'images/borrachuelos.jpeg',
        mainCaption: 'Photo by Julia González Ruiz. Borrachuelos made by my grandmother and aunt',
        gallery: []
    },
    'churros': {
        title: 'Ordering coffee in Málaga',
        text: `
            <p>Coffee in Málaga has its own system. Instead of asking for “coffee with milk,” people order based on the proportion of coffee to milk, using specific names.</p>
            <p>From solo (only coffee) to nube (almost all milk), this is the standard way to order coffee across the city, a system especially associated with Café Central, where it became widely established and well known. Ordering coffee this way brings you a little closer to being a true malagueño.</p>
            <img src="images/cafe.jpg" alt="Types of Coffee in Málaga" class="modal-full-width">
            <span class="img-caption">Image from Café Santa Cristina</span>
        `,
        mainImage: 'images/pedir-cafe.webp',
        mainImagePosition: 'top',
        mainCaption: 'Photo by Julia González Ruiz',
        gallery: []
    },
    'verdiales': {
        title: 'Verdiales',
        text: `
            <p>Verdiales is one of the oldest living musical traditions in Málaga, with origins that date back more than 3,000 years. Its roots are linked to ancient agricultural rituals and celebrations connected to the land, long before the city became what it is today.</p>
            <p>The tradition combines violin, guitars, tambourines, cymbals, and singing, performed by groups known as pandas. Historically, verdiales was played in rural areas and villages around Málaga during seasonal festivities, especially related to harvests and communal gatherings.</p>
            <p>Today, verdiales remains a living tradition, passed down through families and local communities. It is still celebrated publicly during events such as the Verdiales Festival in Puerto de la Torre, where music, dance, and community continue to come together in a way that is rooted in local identity rather than spectacle.</p>
        `,
        mainImage: 'images/verdiales.jpg',
        mainCaption: 'Photo by Julia González Ruiz',
        gallery: [],
        videoLink: 'https://www.facebook.com/share/r/1CSyxoV4k5/'
    },
    'el-tintero': {
        title: 'El Tintero',
        text: `
            <p>El Tintero is known for its unique way of serving food, often described as “auction-style.” There is no menu to order from. Instead, waiters walk between tables carrying freshly cooked dishes and calling them out loud. If you want something, you signal, and the plate is brought to your table.</p>
            <p>Located in El Palo, on Málaga’s eastern coast, El Tintero has been part of local seaside life since the late 20th century. Its system was born out of practicality and gradually became a defining feature of the place.</p>
            <p>More than a restaurant, El Tintero represents a local gastronomic ritual, informal, social, and deeply rooted in Málaga’s everyday coastal culture.</p>

            <img src="images/Chiringuito.jpeg" alt="Chiringuito El Tintero" class="modal-center-img">
            <span class="img-caption" style="text-align: center; display: block;">Photo by Julia González Ruiz</span>
        `,
        mainImage: 'images/el-tintero.jpeg',
        mainCaption: 'Photo by Julia González Ruiz',
        video: 'images/Camarero.mp4',
        videoCaption: 'Video by Julia González Ruiz',
        gallery: []
    },
    'el-palo': {
        title: 'El Palo · Pedregalejo',
        text: `
            <p>El Palo and Pedregalejo are traditional seaside neighbourhoods with deep fishing roots. For centuries, they developed as coastal settlements linked to artisanal fishing and maritime life, a history that still shapes their identity today.</p>
            <p>Life here unfolds along the promenade, where walking, meeting neighbours, and eating by the sea are part of everyday routine. The rhythm is calm and familiar, built around daily habits rather than sightseeing.</p>
            <p>Together, these neighbourhoods represent Málaga’s historic fishing coast: lived-in, local, and closely connected to the sea.</p>
        `,
        mainImage: 'images/el-palo.jpeg',
        mainCaption: 'Photo by Julia González Ruiz',
        mainImagePosition: 'center 65%',
        gallery: [
            { src: 'images/pedregalejo.jpeg', caption: 'Photo by Julia González Ruiz' },
            { src: 'images/Puerto.jpeg', caption: 'Photo by Julia González Ruiz' }
        ]
    },
    'banos-carmen': {
        title: 'Baños del Carmen',
        text: `
            <p>Opened on 16 July 1918, Baños del Carmen was Málaga’s first open-air seaside bathing resort and marked a turning point in how the beach was used. It introduced a new way of enjoying the coast: not only for swimming, but as a social and leisure space where people spent long hours by the sea.</p>
            <p>Located on Málaga’s eastern coast, between Pedregalejo and La Araña, it quickly became a meeting place for different generations. Over time, its role shifted from formal bathing to a more relaxed and informal relationship with the beach, reflecting broader changes in Málaga’s coastal life.</p>
            <p>Today, Baños del Carmen is also home to El Balneario, the restaurant set within the historic site. Together, the space and the restaurant preserve the atmosphere of a place shaped by time, valued less for perfection than for memory, familiarity, and its emotional connection to the city.</p>
        `,
        mainImage: 'images/banos-del-carmen.jpeg',
        mainCaption: 'Photo by Julia González Ruiz',
        mainImagePosition: 'center 80%',
        gallery: []
    },
    'puente-alemanes': {
        title: 'Puente de los Alemanes',
        text: `
            <p>The Puente de los Alemanes is one of Málaga’s most meaningful landmarks, rooted in an act of mutual solidarity. Its origin dates back to the 1900 flood, when the Guadalmedina river overflowed and caused severe destruction in the city, leaving many families homeless.</p>
            <p>In the aftermath, Málaga received significant humanitarian aid from Germany, including donations and support for reconstruction. Years later, in 1907, a German warship (Gneisenau) sank off the coast of Málaga during a storm. Local fishermen and residents risked their lives to rescue the crew, saving dozens of sailors.</p>
            <p>As a gesture of gratitude for that help, and in memory of the lives lost, Germany funded the construction of this bridge, inaugurated in 1909. The structure was designed not only to serve a practical purpose, but to stand as a symbol of solidarity between the two communities.</p>
            <p>Today, it is simply part of the city’s everyday route, until you know what it represents.</p>
        `,
        mainImage: 'images/puente-alemanes.jpg',
        mainCaption: 'Photo by Julia González Ruiz',
        gallery: []
    },
    'cementerio-ingles': {
        title: 'Cementerio Inglés',
        text: `
            <p>The English Cemetery is the oldest Protestant cemetery in Spain, opened in 1831. It was created at a time when non-Catholics were not allowed to be buried in public cemeteries, forcing foreign residents to be buried outside the city walls or even on the beach.</p>
            <p>Its creation was made possible thanks to the initiative of William Mark, the British consul in Málaga, and the support of the local authorities. The cemetery reflects the presence of an international community in Málaga during the 19th century, closely linked to trade, industry, and cultural exchange.</p>
            <p>Located on the eastern side of the city, the cemetery has a quiet, intimate atmosphere. More than a burial place, it preserves personal stories, names, and memories that form part of Málaga’s lesser-known history, a space where the city’s past can still be read in silence.</p>
        `,
        mainImage: 'images/cementerio-ingles.jpg',
        mainCaption: 'Photo by Julia González Ruiz',
        gallery: []
    },
    'santuario-victoria': {
        title: 'Santuario de la Virgen de la Victoria',
        text: `
            <p>The Sanctuary of the Virgen de la Victoria is one of Málaga’s most important religious and historical sites. Its origins date back to the late 15th century, linked to the Christian conquest of the city in 1487, when the Virgin of Victory became Málaga’s patron saint.</p>
            <p>Over time, the sanctuary evolved into a place of devotion closely connected to local religious life. The complex includes the church, the crypt, and the Camarín de la Virgen, a richly decorated baroque space built in the 18th century, reflecting the importance of the site beyond its architectural value.</p>
            <p>Today, the sanctuary remains part of Málaga’s living tradition. It is especially present during local religious celebrations and continues to hold strong emotional meaning for many residents, linking faith, history, and collective memory.</p>
        `,
        mainImage: 'images/virgen-victoria.jpeg',
        mainCaption: 'Photo by Julia González Ruiz',
        mainImagePosition: 'center 35%',
        gallery: [
            { src: 'images/Iglesia.jpeg', caption: 'Photo by Julia González Ruiz' },
            { src: 'images/Camar%C3%ADn.jpeg', caption: 'Photo by Julia González Ruiz' }
        ]
    },
    'parador-gibralfaro': {
        title: 'Parador de Gibralfaro',
        text: `
            <p>The Parador de Gibralfaro is located on Mount Gibralfaro, overlooking the city, the port, and the Mediterranean. It stands on a site historically linked to Málaga’s defensive past, near the castle that once protected the city.</p>
            <p>The building opened in 1948 as part of the Spanish Paradores network, created to reuse historically significant locations. Its position offers a viewpoint that helps understand Málaga’s geography and its relationship with the sea.</p>
            <p>Unlike many of the places in this collection, the Parador is well known to visitors for its panoramic views. Even so, it has become part of Málaga’s collective memory, where history, landscape, and everyday city life meet from above.</p>
            <img src="images/plaza-de-toros.jpg" alt="Plaza de Toros de la Malagueta from Gibralfaro" class="modal-center-img" style="max-width: 50%;">
            <span class="img-caption" style="text-align: center; display: block;">Photo by Julia González Ruiz</span>
        `,
        mainImage: 'images/parador-gibralfaro.jpeg',
        mainCaption: 'Photo by Julia González Ruiz',
        gallery: []
    }
};

function openContent(id, cardElement) {
    const data = modalData[id];
    if (!data) return;

    const isMobile = window.innerWidth < 1024;

    if (isMobile) {
        handleInlineExpansion(id, cardElement, data);
    } else {
        openModal(id, data);
    }
}

function openModal(id, data) {
    const galleryHtml = data.gallery.map(img => `
        <div>
            <img src="${img.src}" alt="Gallery Image">
            <span class="img-caption">${img.caption}</span>
        </div>
    `).join('');

    const imgStyle = data.mainImagePosition ? ` style="object-position: ${data.mainImagePosition}"` : '';
    const videoHtml = data.video ? `
        <div class="modal-video-container">
            <video controls class="modal-video" style="width: 100%; border-radius: 8px; margin-top: 1.5rem;">
                <source src="${data.video}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            ${data.videoCaption ? `<span class="img-caption" style="display:block; margin-top:0.5rem;">${data.videoCaption}</span>` : ''}
        </div>
    ` : '';

    const videoLinkHtml = data.videoLink ? `
        <div class="modal-video-container" style="margin-top: 1.5rem; text-align: center;">
            <a href="${data.videoLink}" target="_blank" class="video-link-btn" style="
                display: inline-block;
                padding: 10px 20px;
                background-color: #1877F2;
                color: white;
                text-decoration: none;
                border-radius: 5px;
                font-weight: bold;
                transition: background 0.3s;
            ">
                Watch Video on Facebook
            </a>
            <p style="font-size: 0.8rem; color: #777; margin-top: 0.5rem;">opens in a new tab</p>
        </div>
    ` : '';

    const html = `
        <img src="${data.mainImage}" alt="${data.title}" class="modal-main-img"${imgStyle}>
        <span class="modal-img-caption">${data.mainCaption}</span>
        
        <h2 class="modal-title">${data.title}</h2>
        
        <div class="modal-text">
            ${data.text}
            ${videoHtml}
            ${videoLinkHtml}
        </div>
        
        <div class="modal-gallery${data.gallery.length === 1 ? ' single-item' : ''}">
            ${galleryHtml}
        </div>
    `;

    modalBody.innerHTML = html;
    modalOverlay.classList.remove('hidden');
    requestAnimationFrame(() => {
        modalOverlay.classList.add('active');
    });

    document.body.style.overflow = 'hidden';
}

function handleInlineExpansion(id, cardElement, data) {
    // Check if there's already an expanded section for this card
    let expandedSection = cardElement.nextElementSibling;
    if (expandedSection && expandedSection.classList.contains('inline-expanded-content')) {
        expandedSection.classList.toggle('active');
        if (!expandedSection.classList.contains('active')) {
            setTimeout(() => expandedSection.remove(), 400);
        }
        return;
    }

    // Close any other open expansions first
    document.querySelectorAll('.inline-expanded-content').forEach(el => {
        el.classList.remove('active');
        setTimeout(() => el.remove(), 400);
    });

    // Create new expansion
    expandedSection = document.createElement('div');
    expandedSection.className = 'inline-expanded-content';

    const galleryHtml = data.gallery.map(img => `
        <div class="inline-gallery-item">
            <img src="${img.src}" alt="Gallery Image">
            <span class="img-caption">${img.caption}</span>
        </div>
    `).join('');

    const imgStyle = data.mainImagePosition ? ` style="object-position: ${data.mainImagePosition}"` : '';
    const videoHtml = data.video ? `
        <div class="inline-video-container">
            <video controls class="inline-video">
                <source src="${data.video}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            ${data.videoCaption ? `<span class="img-caption">${data.videoCaption}</span>` : ''}
        </div>
    ` : '';

    const videoLinkHtml = data.videoLink ? `
        <div class="inline-video-container link-only">
            <a href="${data.videoLink}" target="_blank" class="video-link-btn">
                Watch Video on Facebook
            </a>
        </div>
    ` : '';

    expandedSection.innerHTML = `
        <div class="inline-content-wrapper">
            <button class="close-inline">&times;</button>
            <img src="${data.mainImage}" alt="${data.title}" class="inline-main-img"${imgStyle}>
            <span class="img-caption">${data.mainCaption}</span>
            <h2 class="inline-title">${data.title}</h2>
            <div class="inline-text">
                ${data.text}
                ${videoHtml}
                ${videoLinkHtml}
            </div>
            <div class="inline-gallery${data.gallery.length === 1 ? ' single-item' : ''}">
                ${galleryHtml}
            </div>
        </div>
    `;

    cardElement.after(expandedSection);

    // Trigger transition
    requestAnimationFrame(() => {
        expandedSection.classList.add('active');
        expandedSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    expandedSection.querySelector('.close-inline').addEventListener('click', () => {
        expandedSection.classList.remove('active');
        setTimeout(() => expandedSection.remove(), 400);
    });
}

function closeModal() {
    modalOverlay.classList.remove('active');
    setTimeout(() => {
        modalOverlay.classList.add('hidden');
        modalBody.innerHTML = '';
    }, 300);

    document.body.style.overflow = '';
}

// Event Listeners
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        if (id) {
            openContent(id, card);
        }
    });
});

closeBtn.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        closeModal();
    }
});
