import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import BlogSideBar from '../components/BlogDetails/BlogSideBar';
import FeaturedPost from '../components/BlogDetails/FeaturedPost';
import MainFeaturedPost from '../components/BlogDetails/MainFeaturedPost';
import Footer from '../components/home/Footer/Footer';
import NavBar from '../components/home/Header/NavBar';
import styles from './styles.module.css';

const mainFeaturedPost = {
    title: 'Title of a longer featured blog post',
    description:
        "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: 'https://source.unsplash.com/random',
    imageText: 'main image description',
    linkText: 'Continue reading…',
};

const featuredPosts = [
    {
        title: 'Featured post',
        date: 'Nov 12',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random',
        imageLabel: 'Image Text',
    },
    {
        title: 'Post title',
        date: 'Nov 11',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random',
        imageLabel: 'Image Text',
    },
];


const sidebar = {
    title: 'About',
    description:
        'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
    archives: [
        { title: 'March 2020', url: '#' },
        { title: 'February 2020', url: '#' },
        { title: 'January 2020', url: '#' },
        { title: 'November 1999', url: '#' },
        { title: 'October 1999', url: '#' },
        { title: 'September 1999', url: '#' },
        { title: 'August 1999', url: '#' },
        { title: 'July 1999', url: '#' },
        { title: 'June 1999', url: '#' },
        { title: 'May 1999', url: '#' },
        { title: 'April 1999', url: '#' },
    ],
    social: [
        { name: 'GitHub', icon: GitHubIcon },
        { name: 'Twitter', icon: TwitterIcon },
        { name: 'Facebook', icon: FacebookIcon },
    ],
};

const theme = createTheme();


const Blog = () => {

    return (
        <div className={styles.blog_page}>
            <ThemeProvider theme={theme}>
                <NavBar />
                <br /><br /><br />
                <CssBaseline />
                <Container maxWidth="lg">
                    <main>
                        <MainFeaturedPost post={mainFeaturedPost} />
                        <Grid container spacing={4}>
                            {featuredPosts.map((post) => (
                                <FeaturedPost key={post.title} post={post} />
                            ))}
                        </Grid>
                        <Grid container spacing={5} sx={{ mt: 3 }}>
                            <Grid
                                item
                                xs={12}
                                md={8}
                                sx={{
                                    '& .markdown': {
                                        py: 3,
                                    },
                                }}
                            >
                                <Typography variant="h5" gutterBottom>
                                     Sample blog post
                                </Typography>
                                <Divider />
                                <Typography variant="body1" gutterBottom>
                                    This blog post shows a few different types of content that are supported and styled with
                                    Material styles. Basic typography, images, and code are all supported.
                                    You can extend these by modifying `Markdown.js`.

                                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                                    Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
                                    Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.

                                    Curabitur blandit tempus porttitor. **Nullam quis risus eget urna mollis** ornare vel eu leo.
                                    Nullam id dolor id nibh ultricies vehicula ut id elit.

                                    Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum.
                                    Aenean lacinia bibendum nulla sed consectetur.
                                </Typography>
                                <Box sx={{ mt: 1, typography: 'body1' }}>
                                    <br />
                                    <Typography variant="h5" gutterBottom>
                                        Sub-heading 1
                                    </Typography>
                                    <Divider />
                                    Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                                    Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                    <br />
                                    <Typography variant="h5" gutterBottom>
                                        Sub-heading 1
                                    </Typography>
                                    <Divider />
                                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus
                                    <br />
                                    <Typography variant="h5" gutterBottom>
                                        Sub-heading 2
                                    </Typography>
                                    <Divider />
                                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                                    Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod.
                                    Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo
                                    sit amet risus.
                                    <br />
                                    <ul>
                                        <li>- Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
                                        <li>- Donec id elit non mi porta gravida at eget metus.</li>
                                        <li> - Nulla vitae elit libero, a pharetra augue.</li>
                                    </ul>
                                    Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.
                                    <br />
                                    <ol>
                                        <li> Vestibulum id ligula porta felis euismod semper.</li>
                                        <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>
                                        <li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li>
                                    </ol>
                                    Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.
                                </Box>


                            </Grid>
                            <BlogSideBar
                                title={sidebar.title}
                                description={sidebar.description}
                                archives={sidebar.archives}
                                social={sidebar.social}
                            />
                        </Grid>
                    </main>
                </Container>
                <br />
                <Footer />
            </ThemeProvider>
        </div>
    );
};

export default Blog;