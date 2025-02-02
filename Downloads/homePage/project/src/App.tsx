import React, { useState,useEffect } from 'react';
import {
  Sun,
  Cloud,
  Bell,
  User,
  Settings,
  MessageSquare,Leaf,

  Tractor,
  Store,
  Share2,
  Search,
  Brain,
  Bot,
  ChevronRight,
  Menu,
  Plus,
  Edit,
  Trash2,
  X,
} from 'lucide-react';

interface Post {
  id: string;
  title: string;
  content: string;
  date: string;
  type: 'update' | 'alert' | 'news';
}

function App() {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [weatherIcon, setWeatherIcon] = useState('clouds.png');
  const [isAdmin, setIsAdmin] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showNewPost, setShowNewPost] = useState(false);
  const [showManageContent, setShowManageContent] = useState(false);
  const [posts, setPosts] = useState<Post[]>([
    {
      id: '1',
      title: 'New Government Scheme',
      content: 'Agricultural subsidies available for organic farming. Apply before March 31st.',
      date: '2024-02-20',
      type: 'alert'
    },
    {
      id: '2',
      title: 'Community Market Day',
      content: 'Join us this Saturday for the weekly farmers market. Bring your fresh produce!',
      date: '2024-02-19',
      type: 'news'
    },
    {
      id: '3',
      title: 'Weather Alert',
      content: 'Expected rainfall in the next week. Plan your harvesting accordingly.',
      date: '2024-02-18',
      type: 'update'
    }
  ]);
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    type: 'update' as const
  });

  const openDroxyChat = () => {
    window.open("https://app.droxy.ai/agent/679e18353aabfee86bb77087", "_self");
  };

  const handleChatClick = () => {
    window.location.href = "https://app.droxy.ai/agent/679e18353aabfee86bb77087";
  };

  const apiKey = '5fe21caf3f68ba7ec2576cd9f43016cc';
  const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';


  const checkWeather = async (location) => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(apiUrl + location + `&appid=${apiKey}`);
      if (response.status === 404) {
        setError(true);
        setWeatherData(null);
      } else {
        const data = await response.json();
        setWeatherData(data);
        setError(false);

        switch (data.weather[0].main) {
          case 'Clouds':
            setWeatherIcon('clouds.png');
            break;
          case 'Clear':
            setWeatherIcon('clear.png');
            break;
          case 'Rain':
            setWeatherIcon('rain.png');
            break;
          case 'Drizzle':
            setWeatherIcon('drizzle.png');
            break;
          case 'Mist':
            setWeatherIcon('mist.png');
            break;
          default:
            setWeatherIcon('clouds.png');
        }
      }
    } catch (err) {
      setError(true);
      setWeatherData(null);
    }
    setLoading(false);
  };

  const handleSearch = () => {
    checkWeather(location);
  };

  const getAgriAdvice = (temp, humidity, windSpeed) => {
    let advice = [];
    if (temp > 30) {
      advice.push("High temperature. Ensure proper irrigation.");
    } else if (temp < 10) {
      advice.push("Low temperature. Protect sensitive crops.");
    }
    if (humidity > 80) {
      advice.push("High humidity. Watch for fungal diseases.");
    }
    if (windSpeed > 20) {
      advice.push("Strong winds. Secure structures and young plants.");
    }
    return advice.length > 0 ? advice : ["Weather conditions are favorable for most crops."];
  };

  const addPost = () => {
    const post: Post = {
      id: Date.now().toString(),
      title: newPost.title,
      content: newPost.content,
      date: new Date().toISOString().split('T')[0],
      type: newPost.type
    };
    setPosts([post, ...posts]);
    setNewPost({ title: '', content: '', type: 'update' });
    setShowNewPost(false);
  };

  const deletePost = (id: string) => {
    setPosts(posts.filter(post => post.id !== id));
  };

 // Replace with your actual icon import

  // State to manage chatbot visibility




  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Menu className="h-6 w-6 text-gray-600 hover:text-emerald-600 transition-colors cursor-pointer" />
              <h1 className="text-2xl font-bold text-emerald-600 hover:text-emerald-700 transition-colors">
                Village Connect
              </h1>
            </div>
            
            {/* Admin Toggle */}
            <div className="flex items-center space-x-4">
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer"
                  checked={isAdmin}
                  onChange={() => setIsAdmin(!isAdmin)}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                <span className="ml-3 text-sm font-medium text-gray-700">
                  {isAdmin ? 'Admin Mode' : 'User Mode'}
                </span>
              </label>
              <div className="relative group">
                <User className="h-6 w-6 text-gray-600 hover:text-emerald-600 transition-colors cursor-pointer" />
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
                  <div className="p-4">
                    <p className="font-semibold">John Doe</p>
                    <p className="text-sm text-gray-600">farmer@example.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
     <div className="relative bg-emerald-700 text-white overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-r from-emerald-800 to-emerald-600 opacity-50"></div>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-6 animate-fade-in">
        <h2 className="text-4xl font-bold mb-4"> Welcome to Village Connect </h2>
        <p className="text-emerald-100 mb-8 text-lg">Empowering farmers with technology and community 🚜🌱</p>

        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 mb-4 transform hover:scale-105 transition-transform">
          <div className="flex items-center space-x-2">
            {weatherData ? (
              <>
                <Sun className="h-6 w-6 text-yellow-400" />
                <span>{Math.round(weatherData.main.temp)}°C | {weatherData.weather[0].main} ☀️</span>
              </>
            ) : (
              <>
                <Cloud className="h-6 w-6 text-gray-400" />
                <span>28°C | Partly Cloudy ☁️</span>
              </>
            )}
          </div>
          <p className="text-sm mt-2">Perfect weather for crop maintenance 🌿</p>
        </div>

        <div className="search flex items-center space-x-2 mb-4">
          <input
            type="text"
            placeholder="Enter location                        📍"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            spellCheck="false"
            className="p-2 rounded-lg text-black w-full sm:w-64"
          />
          <button 
            onClick={handleSearch} 
            className={`p-2 ml-2 rounded-lg bg-emerald-500 ${loading ? 'loading' : ''}`}
          >
            <Search className="h-6 w-6 text-white" />
          </button>
        </div>

        {error && (
          <div className="error text-red-500 mt-2">
            <p>Invalid location name 😞</p>
          </div>
        )}

        {weatherData && (
          <div className="agri-advice mt-4">
            <h4 className="text-lg font-bold">🌾 Agricultural Advice 🌱:</h4>
            <ul className="list-disc list-inside ml-5">
              {getAgriAdvice(weatherData.main.temp, weatherData.main.humidity, weatherData.wind.speed).map((advice, index) => (
                <li key={index}>{advice}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="relative transform hover:scale-105 transition-transform duration-300">
        <div className="rounded-lg bg-emerald-600 text-white flex justify-center items-center h-64">
        <img
          src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80"
          alt="Farm landscape"
          className="rounded-lg object-cover h-64 w-full shadow-2xl"
        />
        </div>
      </div>
    </div>
  </div>
</div>


      {/* Updates Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold mb-6">Latest Updates</h2>
        <div className="space-y-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow animate-fade-in"
            >
              <div className="flex justify-between items-start">
                <div>
                  <span className={`inline-block px-2 py-1 rounded text-sm ${
                    post.type === 'alert' ? 'bg-red-100 text-red-800' :
                    post.type === 'news' ? 'bg-blue-100 text-blue-800' :
                    'bg-green-100 text-green-800'
                  } mb-2`}>
                    {post.type.charAt(0).toUpperCase() + post.type.slice(1)}
                  </span>
                  <h3 className="text-lg font-semibold">{post.title}</h3>
                  <p className="text-gray-600 mt-1">{post.content}</p>
                  <p className="text-sm text-gray-500 mt-2">{post.date}</p>
                </div>
                {isAdmin && (
                  <button
                    onClick={() => deletePost(post.id)}
                    className="text-gray-400 hover:text-red-600 transition-colors"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* <FeatureCard
            icon={<Settings className="h-6 w-6" />}
            title="SIL Test"
            description="Check soil health and get recommendations"
          /> */}
          <a href="https://merry-pothos-4828c8.netlify.app/" target="_self" rel="noopener noreferrer">
  <FeatureCard
    icon={<Settings className="h-6 w-6" />}
    title="SIL Test"
    description="Check soil health and get recommendations"
  />
</a>

<a href="http://localhost:5175/" target="_self" rel="noopener noreferrer">
          <FeatureCard
            icon={<Tractor className="h-6 w-6" />}
            title="Equipment Rent"
            description="Rent farming equipment from the community"
          />
          </a>

          <a href="http://localhost/FarmEasy/" target="_self" rel="noopener noreferrer">
 
          <FeatureCard
            icon={<Store className="h-6 w-6" />}
            title="Marketplace"
            description="Buy and sell agricultural products"
          /></a>

<a href="https://merry-pothos-4828c8.netlify.app/" target="_self" rel="noopener noreferrer">
 
          <FeatureCard
            icon={<Share2 className="h-6 w-6" />}
            title="Resource Sharing"
            description="Share and access community resources"
          />

          </a>

          <a href="https://stupendous-halva-cc9878.netlify.app/" target="_self" rel="noopener noreferrer">
 
     

          <FeatureCard
            icon={<Brain className="h-6 w-6" />}
            title="Agriculture Insights"
            description="Get expert farming advice and tips"
          /></a>

          <FeatureCard
            icon={<MessageSquare className="h-6 w-6" />}
            title="Community Posts"
            description="Connect with other farmers"
          />
        </div>

        {/* Admin Section */}
        {isAdmin && (
          <div className="mt-12 bg-white rounded-lg shadow p-6 animate-fade-in">
            <h3 className="text-lg font-semibold mb-4">Admin Controls</h3>
            <div className="space-y-4">
              <button
                onClick={() => setShowNewPost(true)}
                className="w-full bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2"
              >
                <Plus className="h-5 w-5" />
                <span>Post New Update</span>
              </button>
              <button
                onClick={() => setShowManageContent(true)}
                className="w-full bg-emerald-100 text-emerald-700 px-4 py-2 rounded-lg hover:bg-emerald-200 transition-colors flex items-center justify-center space-x-2"
              >
                <Edit className="h-5 w-5" />
                <span>Manage Content</span>
              </button>
            </div>
          </div>
        )}
      </main>

      {/* New Post Modal */}
      {showNewPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md animate-scale-in">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Create New Post</h3>
              <button
                onClick={() => setShowNewPost(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  value={newPost.title}
                  onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Content
                </label>
                <textarea
                  value={newPost.content}
                  onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  rows={4}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Type
                </label>
                <select
                  value={newPost.type}
                  onChange={(e) => setNewPost({ ...newPost, type: e.target.value as 'update' | 'alert' | 'news' })}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  <option value="update">Update</option>
                  <option value="alert">Alert</option>
                  <option value="news">News</option>
                </select>
              </div>
              <button
                onClick={addPost}
                className="w-full bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
              >
                Post Update
              </button>
            </div>
          </div>
        </div>
      )}

      
      {/* <div className="fixed bottom-4 right-4">
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="bg-emerald-600 text-white p-3 rounded-full shadow-lg hover:bg-emerald-700 transition-all hover:scale-110"
        >
          <Bot className="h-6 w-6" />
        </button>
        {isChatOpen && (
          <div className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-xl animate-slide-up">
            <div className="p-4 border-b">
              <h3 className="font-semibold">Village Connect Assistant</h3>
            </div>
            <div className="h-96 p-4">
              <p className="text-gray-600">How can I help you today?</p>
            </div>
          </div>
        )}


      </div> */}



    


      <div className="fixed bottom-4 right-4">
      {/* Bot Icon Button */}
      <button
        onClick={handleChatClick}
        className="bg-emerald-600 text-white p-3 rounded-full shadow-lg hover:bg-emerald-700 transition-all hover:scale-110"
      >
        <Bot className="h-6 w-6" />
      </button>
    </div>
  


      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4">About</h4>
              <ul className="space-y-2">
                <li className="hover:text-emerald-400 transition-colors cursor-pointer">About Us</li>
                <li className="hover:text-emerald-400 transition-colors cursor-pointer">Contact</li>
                <li className="hover:text-emerald-400 transition-colors cursor-pointer">Careers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li className="hover:text-emerald-400 transition-colors cursor-pointer">Privacy Policy</li>
                <li className="hover:text-emerald-400 transition-colors cursor-pointer">Terms of Service</li>
                <li className="hover:text-emerald-400 transition-colors cursor-pointer">Cookie Policy</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li className="hover:text-emerald-400 transition-colors cursor-pointer">Help Center</li>
                <li className="hover:text-emerald-400 transition-colors cursor-pointer">FAQs</li>
                <li className="hover:text-emerald-400 transition-colors cursor-pointer">Community Guidelines</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li className="hover:text-emerald-400 transition-colors cursor-pointer">Facebook</li>
                <li className="hover:text-emerald-400 transition-colors cursor-pointer">Twitter</li>
                <li className="hover:text-emerald-400 transition-colors cursor-pointer">Instagram</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p>&copy; 2024 Village Connect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center space-x-4">
        <div className="bg-emerald-100 p-3 rounded-lg">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
        <ChevronRight className="h-5 w-5 text-gray-400 ml-auto" />
      </div>
    </div>
  );
}

export default App;