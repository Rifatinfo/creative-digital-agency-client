'use client'
import Image from 'next/image'
import AnimatedSectionTitle from '../sectionTitle/AnimatedSectionTitle';
export const clients = [
    { "id": 1, "imageUrl": "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765352093/ACC_1_oqxaqv.png" },
    { "id": 2, "imageUrl": "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765352124/Akij_2_orm3hr.png" },
    { "id": 3, "imageUrl": "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765352143/Colourrose_3_v8ubx0.png" },
    { "id": 4, "imageUrl": "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765352167/Marcel_4_rhqlva.png" },
    { "id": 5, "imageUrl": "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765352193/Nestle_5_irz4te.png" },
    { "id": 6, "imageUrl": "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765352212/Pran_6_jycwbw.png" },
    { "id": 7, "imageUrl": "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765352235/RFL_7_vzwo2k.png" },
    { "id": 8, "imageUrl": "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765352258/SSG_8_yxo0gf.png" },
    { "id": 9, "imageUrl": "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765352278/Teletalk_9_c3z3i3.png" },
    { "id": 10, "imageUrl": "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765352300/UNDP_10_giblcc.png" },
    { "id": 11, "imageUrl": "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765352337/Unilever_11_urddnc.png" },
    { "id": 12, "imageUrl": "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765352359/Walton_13_cr5xxl.png" },
    { "id": 13, "imageUrl": "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765352093/ACC_1_oqxaqv.png" },
    { "id": 14, "imageUrl": "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765352124/Akij_2_orm3hr.png" },
    { "id": 15, "imageUrl": "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765352143/Colourrose_3_v8ubx0.png" },
    { "id": 16, "imageUrl": "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765352167/Marcel_4_rhqlva.png" },
    { "id": 17, "imageUrl": "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765352193/Nestle_5_irz4te.png" },
    { "id": 18, "imageUrl": "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765352212/Pran_6_jycwbw.png" },
    { "id": 19, "imageUrl": "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765352235/RFL_7_vzwo2k.png" },
    { "id": 20, "imageUrl": "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765352258/SSG_8_yxo0gf.png" },
    { "id": 21, "imageUrl": "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765352278/Teletalk_9_c3z3i3.png" },
    { "id": 22, "imageUrl": "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765352300/UNDP_10_giblcc.png" },
    { "id": 23, "imageUrl": "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765352337/Unilever_11_urddnc.png" },
    { "id": 24, "imageUrl": "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765352359/Walton_13_cr5xxl.png" },
    { "id": 25, "imageUrl": "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765352397/Vision_12_m1g5zb.png" },
    { "id": 26, "imageUrl": "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765352397/Vision_12_m1g5zb.png" },
    { "id": 27, "imageUrl": "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765352300/UNDP_10_giblcc.png" },
    { "id": 28, "imageUrl": "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765352337/Unilever_11_urddnc.png" },
    { "id": 29, "imageUrl": "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765352359/Walton_13_cr5xxl.png" },
    { "id": 30, "imageUrl": "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1765352397/Vision_12_m1g5zb.png" }
]


const OurClients = () => {
    return (
        <div className='max-w-7xl mx-auto mb-26'>
            <div className='mt-10'>
                {/* Heading */}
                <AnimatedSectionTitle
                    title="Our Clients"
                    subtitle="Trusted by leading brands worldwide"
                />
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 md:gap-4 gap-2 px-2 md:px-0">
                {clients.map((c) => (
                    <div
                        key={c.id}
                        className="rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center p-6 h-28"
                    >
                        <div className="relative w-full h-full flex items-center justify-center">
                            <Image
                                src={c.imageUrl}
                                alt={`Client ${c.id}`}
                                fill
                                className="object-contain hover:scale-110 transition-transform duration-300 ease-in-out p-2"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurClients;