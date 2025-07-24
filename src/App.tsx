import React from 'react';
import Header from './components/Header';
import RemoteControl from './components/RemoteControl';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8 flex flex-col items-center justify-center">
        <h2 className="text-xl font-medium text-gray-800 mb-6 text-center">
          スマホから家電の電源をOFFにできる<br className="sm:hidden" />簡易Webリモコン
        </h2>
        
        <RemoteControl />
        
        <div className="mt-12 max-w-md mx-auto px-4 py-4 bg-blue-50 rounded-lg border border-blue-100">
          <h3 className="text-lg font-medium text-blue-800 mb-2">使い方</h3>
          <ol className="list-decimal list-inside text-sm text-gray-700 space-y-2">
            <li>操作したい家電を選択します</li>
            <li>「電源を切る」ボタンをタップします</li>
            <li>操作結果が表示されます</li>
          </ol>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;