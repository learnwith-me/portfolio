import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { FetchPosts } from '../api/FetchData';


const Sitemap = ({ FetchPosts, PostReducer, loading, error }) => {

    useEffect(() => {
        FetchPosts('posts');
    }, []);

    const generateXml = (posts) => {
        let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
        xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

        posts.forEach((catItem) => {
            const dateWithoutTime = catItem.date.substring(0, 10); // Extracting only date part
            xml += '  <url>\n';
            xml += `    <loc>https://www.harshadpatil.com/singlepost/${catItem.id}/${catItem.slug}</loc>\n`;
            xml += `    <lastmod>${dateWithoutTime}</lastmod>\n`;
            xml += '    <priority>0.5</priority>\n';
            xml += '  </url>\n';
        });

        xml += '</urlset>';
        return xml;
    };

    const handleDownload = () => {
        const xmlContent = generateXml(PostReducer.data || []);
        const blob = new Blob([xmlContent], { type: 'application/xml' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'sitemap.xml';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
    };

    return (
        <button onClick={handleDownload}>Download Sitemap</button>
    );
};

const mapStateToProps = (state) => ({
    PostReducer: state.PostReducer,
    loading: state.PostReducer.loader,
    error: state.PostReducer.error
});

export default connect(mapStateToProps, { FetchPosts })(Sitemap);
