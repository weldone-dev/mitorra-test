import type {IProduct} from "@/shared/api";

export const Products: IProduct[] = [
    {
        id: 1,
        image: "/assets/products/product_1.png",
        primaryColor: "#5B8C3A",
        gallery: [
            ""
        ],
        title: "Minecraft Creeper Sneakers",
        subtitle: "Взорви стиль!",
        description: "Для тех кто любит выделяться, шипеть и взрываться.",
        price: 4900,
        about: {
            title: "Особенности",
            description: "Кроссовки вдохновлены вселенной Minecraft. Идеальный выбор для фанатов и приключений.",
            color: "Зелёный пиксельный",
            lining: "Дышащая",
            sole: "Резиновая подошва с текстурой булыжника",
            upper: "Прочный хлопок с цифровым принтом",
            product_code: "MC-404",
            dims: "Вес: 0.7кг, Высота: 11см",
        }
    },
    {
        id: 2,
        image: "/assets/products/product_2.png",
        primaryColor: "#946027",
        gallery: [
            ""
        ],
        title: "Scarecrow's Harvest Boots",
        subtitle: "Бу, не бойся, я друг!",
        description: "Кроссовки в стиле пугала - для тех, кто не боится выделяться на поле моды.",
        price: 3500,
        about: {
            title: "Особенности",
            description: "Вдохновлены классическим образом чучела. Созданы для осенних прогулок по городу.",
            color: "Поношенный коричнево-красный",
            lining: "Текстурированная ткань (имитация мешковины)",
            sole: "Грубая протекторная подошва",
            upper: "Сочетание холщовой и кожаной вставок",
            product_code: "SC-666",
            dims: "Вес: 0.8кг, Высота: 12см",
        }
    },
    {
        id: 3,
        image: "/assets/products/product_3.png",
        primaryColor: "#575a39",
        gallery: [
            ""
        ],
        title: "Zombie Apocalypse Kicks",
        subtitle: "Не беси, а то сожру!",
        description: "Для тех, кто предпочитает стиль даже во время зомби-апокалипсиса.",
        price: 6900,
        about: {
            title: "Особенности",
            description: "Кроссовки с эффектом поношенности и 'кровавыми' деталями. Не съедобны!",
            color: "Грязно-серый с красными вставками",
            lining: "Искусственная кожа с эффектом потертостей",
            sole: "Подошва с 'кровавыми' брызгами",
            upper: "Комбинация рваного холста и кожи",
            product_code: "ZM-101",
            dims: "Вес: 0.9кг, Высота: 13см",
        }
    },
    {
        id: 4,
        image: "/assets/products/product_4.png",
        primaryColor: "#0D386C",
        gallery: [
            ""
        ],
        title: "Superman Speed Force",
        subtitle: "Для героя!",
        description: "Кроссовки для тех, кто хочет чувствовать себя героем каждый день.",
        price: 7900,
        about: {
            title: "Особенности",
            description: "Вдохновлены костюмом Супермена. Красные и синие акценты подчеркивают ваш героический стиль.",
            color: "Кобальтово-синий с красными вставками",
            lining: "Гладкий неопрен с логотипом 'S'",
            sole: "Аэродинамическая подошва с жёлтыми деталями",
            upper: "Эластичный материал с эффектом скорости",
            product_code: "SM-001",
            dims: "Вес: 0.6кг, Высота: 10см",
        }
    }
]