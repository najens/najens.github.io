import movie_trailer from '../img/movie_trailer.png';
import news_app from '../img/news_app.png';
import portfolio from '../img/portfolio.jpg';
import neighborhood_map from '../img/neighborhood_map.jpg';
import aws_lightsail from '../img/aws_lightsail.jpg';
import news_analytics from '../img/news_analytics.jpg';
import item_catalog from '../img/item_catalog.jpg';
import book_listing from '../img/book_listing.jpg';
import inventory_app from '../img/inventory_app.jpg';
import tour_guide from '../img/tour_guide.jpg';
import wiki_crawler from '../img/wiki_crawler.jpg';
import musical_structure from '../img/musical_structure.jpg';
import quiz_app from '../img/quiz_app.jpg';
import football_counter from '../img/football_counter.jpg';
import single_screen from '../img/single_screen.jpg';
import habit_tracker from '../img/habit_tracker.jpg';
import my_reads from '../img/my_reads.jpg';

const projects = [
    {
        url: 'https://github.com/najens/my_reads',
        img: my_reads,
        alt: 'My Reads App',
        description: 'React web application that allows a user to keep track of books that they have read, want to read, or are currently reading',
        topics: ['React', 'JavaScript']
    },
    {
        url: 'https://github.com/najens/item_catalog',
        img: item_catalog,
        alt: 'Item Catalog',
        title: 'Item Catalog App',
        description: 'Python web application that allows users to perform basic crud operations on categories and items',
        topics: ['Python', 'OAuth', 'Html', 'CSS', 'PostgreSQL']
    },
    {
        url: 'https://github.com/najens/neighborhood_map',
        img: neighborhood_map,
        alt: 'Neighborhood Map',
        title: 'Neighborhood Map App',
        description: 'Frontend web application that allows users to add, edit, delete, and filter locations on a Google map',
        topics: ['JavaScript', 'KnockoutJS', 'Bootstrap', 'Webpack', 'APIs']
    },
    {
        url: 'https://github.com/najens/InventoryApp',
        img: inventory_app,
        alt: 'Inventory',
        title: 'Inventory App',
        description: 'Android application for tracking inventory, including current stock and supplier details',
        topics: ['Android', 'SQL']
    },
    {
        url: 'https://github.com/najens/najens.github.io',
        img: portfolio,
        alt: 'Porfolio',
        title: 'Portfolio Website',
        description: 'React website for showcasing my skills and projects',
        topics: ['React', 'JavaScript', 'Html', 'CSS']
    },
    {
        url: 'https://github.com/najens/movie_trailer_website',
        img: movie_trailer,
        alt: 'Movie Trailer',
        title: 'Movie Trailer Website',
        description: 'Python website for listing and playing movie trailers',
        topics: ['Python']
    },
    {
        url: 'https://github.com/najens/NewsApp',
        img: news_app,
        alt: 'News',
        title: 'News App',
        description: `Android application that displays sports news articles from The Guardian's API`,
        topics: ['Android', 'API']
    },
    {
        url: 'https://github.com/najens/BookListingApp',
        img: book_listing,
        alt: 'Book Listing',
        title: 'Book Listing App',
        description: 'Android application that allows users to search books from the Google Books API',
        topics: ['Android', 'API']
    },
    {
        url: 'https://github.com/najens/ud_news_analytics',
        img: news_analytics,
        alt: 'News Analytics',
        title: 'News Analytics App',
        description: 'Python Flask app that returns analytics using queries from a news website database',
        topics: ['Python', 'Flask', 'PostgreSQL']
    },
    {
        url: 'https://github.com/najens/AWS-Lightsail-Server-w-RDS-Postgresql-DB',
        img: aws_lightsail,
        alt: 'AWS Lightsail',
        title: 'AWS Lightsail Instructions',
        description: 'Instructions to setup an AWS Lightsail Server with Apache2, Flask, and an RDS Postgresql DB',
        topics: ['AWS', 'Apache', 'Firewall', 'Flask', 'PostgreSQL']
    },
    {
        url: 'https://github.com/najens/TourGuideApp',
        img: tour_guide,
        alt: 'Tour Guide',
        title: 'Tour Guide App',
        description: 'Android application that provides info on sites, restaurants, recreation, and entertainment in London',
        topics: ['Android']
    },
    {
        url: 'https://github.com/najens/wiki_crawler',
        img: wiki_crawler,
        alt: 'Wiki Crawler',
        title: 'Wikipedia Crawler',
        description: 'Python web crawler that starts at a random url on Wikipedia and follows first link until it reaches target url or exceeds the max number of links',
        topics: ['Python']
    },
    {
        url: 'https://github.com/najens/HabitTracker',
        img: habit_tracker,
        alt: 'Habit Tracker',
        title: 'Habit Tracker Back-end',
        description: 'SQL backend for an Android application that keeps track of habits',
        topics: ['Android', 'SQL']
    },
    {
        url: 'https://github.com/najens/MusicalStructureApp',
        img: musical_structure,
        alt: 'Musical Structure',
        title: 'Musical Structure App',
        description: 'Android application that lays out the structure of a music player app',
        topics: ['Android']
    },
    {
        url: 'https://github.com/najens/QuizApp',
        img: quiz_app,
        alt: 'Quiz App',
        title: 'Quiz App',
        description: `Android application that tests a user's algebra skills with various question types`,
        topics: ['Android']
    },
    {
        url: 'https://github.com/najens/FootballCounter',
        img: football_counter,
        alt: 'Football Counter',
        title: 'Football Counter App',
        description: 'Android application that keeps track of score for a football game',
        topics: ['Android']
    },
    {
        url: 'https://github.com/najens/SingleScreenApp',
        img: single_screen,
        alt: 'Single Screen',
        title: 'Single Screen App',
        description: `Android application that displays information about an event and creates a toast when user's click join`,
        topics: ['Android']
    }
];

export default projects;
