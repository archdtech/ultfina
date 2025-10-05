import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

const DesignSystem = () => {
  return (
    <div className="bg-black text-white min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-12 border-b border-gray-800 pb-4">Ultiro Design System</h1>
        
        {/* Color System */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Color System</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <div className="h-24 bg-[#FF3D22] rounded-md mb-2"></div>
              <p className="font-bold">Primary</p>
              <p className="text-gray-400 text-sm">#FF3D22</p>
            </div>
            
            <div>
              <div className="h-24 bg-black rounded-md mb-2 border border-gray-800"></div>
              <p className="font-bold">Background</p>
              <p className="text-gray-400 text-sm">#000000</p>
            </div>
            
            <div>
              <div className="h-24 bg-[#0D0D0D] rounded-md mb-2 border border-gray-800"></div>
              <p className="font-bold">Card Background</p>
              <p className="text-gray-400 text-sm">#0D0D0D</p>
            </div>
            
            <div>
              <div className="h-24 rounded-md mb-2 border border-gray-800 flex items-center justify-center">
                <span className="text-gray-400">Text</span>
              </div>
              <p className="font-bold">Text / UI Elements</p>
              <p className="text-gray-400 text-sm">#FFFFFF / #888888</p>
            </div>
          </div>
        </section>
        
        {/* Typography */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Typography</h2>
          
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-400 mb-2">Display / H1</p>
              <h1 className="text-5xl font-bold">Display Heading</h1>
            </div>
            
            <div>
              <p className="text-sm text-gray-400 mb-2">Heading / H2</p>
              <h2 className="text-3xl font-bold">Section Heading</h2>
            </div>
            
            <div>
              <p className="text-sm text-gray-400 mb-2">Subheading / H3</p>
              <h3 className="text-xl font-bold">Subheading</h3>
            </div>
            
            <div>
              <p className="text-sm text-gray-400 mb-2">Body</p>
              <p>This is a standard paragraph text. Ultiro helps founders and partners scale in the Nordic region.</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-400 mb-2">Small</p>
              <p className="text-sm">This is smaller text, typically used for less important information.</p>
            </div>
          </div>
        </section>
        
        {/* Buttons */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Buttons</h2>
          
          <div className="space-y-8">
            <div>
              <p className="text-sm text-gray-400 mb-4">Primary Button</p>
              <div className="flex flex-wrap gap-4">
                <button className="btn-primary">
                  Primary Button
                </button>
                <button className="btn-primary inline-flex items-center">
                  With Icon
                  <ArrowRight className="ml-2" size={18} />
                </button>
                <button className="btn-primary btn-sm">
                  Small
                </button>
                <button className="btn-primary btn-lg">
                  Large
                </button>
              </div>
            </div>
            
            <div>
              <p className="text-sm text-gray-400 mb-4">Secondary Button</p>
              <div className="flex flex-wrap gap-4">
                <button className="btn-secondary">
                  Secondary Button
                </button>
                <button className="btn-secondary inline-flex items-center">
                  With Icon
                  <ArrowRight className="ml-2" size={18} />
                </button>
                <button className="btn-secondary btn-sm">
                  Small
                </button>
                <button className="btn-secondary btn-lg">
                  Large
                </button>
              </div>
            </div>
            
            <div>
              <p className="text-sm text-gray-400 mb-4">Outline Button</p>
              <div className="flex flex-wrap gap-4">
                <button className="btn-outline">
                  Outline Button
                </button>
                <button className="btn-outline inline-flex items-center">
                  With Icon
                  <ArrowRight className="ml-2" size={18} />
                </button>
                <button className="btn-outline btn-sm">
                  Small
                </button>
                <button className="btn-outline btn-lg">
                  Large
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Cards */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Cards</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0D0D0D] rounded-md border border-gray-800 p-6">
              <div className="mb-4 font-mono text-xs text-[#FF3D22]">CARD LABEL</div>
              <h3 className="text-xl font-bold mb-2">Card Title</h3>
              <p className="text-gray-400 mb-4 text-sm">This is a standard card with a title and description, typically used for features or services.</p>
              <a href="#" className="text-[#FF3D22] text-sm font-medium inline-flex items-center">
                Call to Action
                <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div>
            
            <div className="bg-[#0D0D0D] rounded-md border border-gray-800 overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-blue-900 to-purple-900 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold">Image Card</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-400 text-sm mb-4">A card with an image header, good for visual content.</p>
                <a href="#" className="text-[#FF3D22] text-sm font-medium inline-flex items-center">
                  View Example
                  <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>
            
            <div className="bg-[#0D0D0D] rounded-md border border-gray-800 p-6">
              <div className="h-12 w-12 bg-[#191919] rounded-full flex items-center justify-center mb-4">
                <Check className="w-6 h-6 text-[#FF3D22]" />
              </div>
              <h3 className="text-lg font-bold mb-2">Feature Card</h3>
              <p className="text-gray-400 text-sm">Feature card with an icon, typically used in feature grids or service listings.</p>
            </div>
          </div>
        </section>
        
        {/* Form Elements */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Form Elements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-medium mb-2">Input Field</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 bg-[#191919] border border-gray-800 rounded-md text-white focus:outline-none focus:border-[#FF3D22]" 
                placeholder="Enter text here" 
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Text Area</label>
              <textarea 
                className="w-full px-4 py-2 bg-[#191919] border border-gray-800 rounded-md text-white focus:outline-none focus:border-[#FF3D22]" 
                placeholder="Enter longer text here"
                rows={3}
              ></textarea>
            </div>
          </div>
        </section>
        
        <div className="flex justify-center mt-12">
          <Link to="/" className="btn-primary inline-flex items-center">
            Back to Home
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DesignSystem;
