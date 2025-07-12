import Avatar from './components/Avatar';


function App() {
   return (
    <div className="p-10 space-x-4">
      <Avatar name="Fatima Zahra" />
      <Avatar name="Ali" size="lg" />
      <Avatar src="https://i.pravatar.cc/150?img=3" name="Zayd" size="sm" />
    </div>
  ); 
}

export default App
