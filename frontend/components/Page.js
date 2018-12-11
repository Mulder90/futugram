const Page = props => (
  <div>
    <div>I'm the shared menu</div>
    {props.children}
  </div>
);

export default Page;
