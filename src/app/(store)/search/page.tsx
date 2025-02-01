async function SearchPage({
  searchParams,
}: {
  searchParams: {
    query: string;
  };
}) {
  const { query } = await searchParams;
  console.log(query, "query");
  return <div>Searchpage for {query}</div>;
}

export default SearchPage;
