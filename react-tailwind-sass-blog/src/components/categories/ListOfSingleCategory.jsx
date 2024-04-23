import { Link } from 'react-router-dom';

export const ListOfSingleCategory = ({ singleCatData, params }) => {

    return (
        <div className="loop-wrap !mb-0">

            {
                singleCatData.map((catItem, index) => {
                    console.log("catItem", catItem.categories[0].slug);

                    if (params.slug === catItem?.categories[0]?.slug) {
                        return (
                            <article key={index} className="item is-loop is-image">
                                <div
                                    className="item-image global-image global-image-orientation global-radius is-landscape"
                                >
                                    <Link className="global-link" to={`/singlepost/${catItem.id}/${catItem.slug}`}></Link>
                                    <img
                                        sizes="(max-width:480px) 300px, (max-width:768px) 600px, 1200px"
                                        src={catItem.featured_image.medium_large}
                                        loading="lazy"
                                        alt=""
                                    />
                                </div>
                                <div className="item-content">

                                    <h2 className="item-title dark:text-white">
                                        <Link to='' className=' dark:text-white'>
                                            {catItem.title}
                                        </Link>
                                    </h2>
                                    <p className="item-excerpt dark:text-white">
                                        {catItem.excerpt}
                                    </p>
                                </div>
                            </article>
                        )
                    }
                })}
        </div>
    )
}