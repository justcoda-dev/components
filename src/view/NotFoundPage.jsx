const NotFoundPage = ({ error }) => {
  return (
    <div>
      <h1>404</h1>
      <h2>not found page</h2>
      <p>{JSON.stringify(error)}</p>
    </div>
  );
};
export default NotFoundPage;
