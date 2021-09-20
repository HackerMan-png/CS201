import { useStoryContext } from './util/context';
import Story from './Components/Story';
import SearchBar from './Components/SearchBar';
import Page from './Components/Page';

function App() {
  const { query, setQuery, loading, stories, error, page, setPage } =
    useStoryContext();
  console.log(stories);
  return (
    <div className='wrapper'>
      <h1>Hacker News</h1>
      <SearchBar />
      <h4>Pages</h4>
      <Page />
      <div className='stories'>
        {stories.map((story) => {
          return (
            <Story key={story.created_at} id={story.created_at} story={story} />
          );
        })}
      </div>
      <Page />
    </div>
  );
}

export default App;
