import React, { useEffect, useState } from 'react'
import { FetchPosts } from '../../api/FetchPosts';
import { connect } from 'react-redux';


const FeaturePost = ({ FetchPosts, PostReducer, loading, error }) => {

    const [numberOfPost, setNumberOfPost] = useState(10),
        slice = PostReducer.data.slice(0, numberOfPost)

    useEffect(() => {
        FetchPosts("posts");
    }, []);

    return (
        <div className='home mt-20'>
            <h3 className="font-normal text-left uppercase tracking-loose-one mb-10 dark:text-white">Featured Posts</h3>
            <div className="posts">
                {
                    slice.map((items, index) => {
                        // console.log("items.categories",items)
                        return (
                            <a href={`/singlepost/${items.id}/${items.slug}`} key={index} aria-label="Feature Post" className=" grid grid-cols-20/80 text-left gap-2 space-y-10 hover:underline dark:decoration-white border-b last-of-type:border-none border-[#f1f1f1] dark:border-[#373737] pb-[10px] mb-[12px]" style={{ height: '' }}>
                                <img style={{ width: '50px', height: '50px' }} src={items?.featured_image?.medium_large} alt='' />
                                <div className=" text-[16px] group-hover:underline !mt-0 dark:text-white">{items.title}</div>
                            </a>
                        )
                    })
                }
            </div>
        </div>
    )
}


const mapStateToProps = (state) => ({
    PostReducer: state.PostReducer,
    loading: state.PostReducer.loader,
    error: state.PostReducer.error,
});

export default connect(mapStateToProps, { FetchPosts })(FeaturePost);
