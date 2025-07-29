import React from 'react'
import service1 from '../assets/Service-1.jpeg'
import drive from '../assets/google_drive.png'
import colab from '../assets/colab.png'
import spamming from '../assets/email_spam.jpeg'
import handwritten from '../assets/Handwriting.png'
import titanic from '../assets/titanic.jpeg'
import house_pre from '../assets/house_price.jpeg'
import Sentiment from '../assets/sentimental.jpeg'

const Projects = () => {
    const services= [
        {title: 'Retail Store Survillance',
        desc: 'I developed an intelligent surveillance system aimed at enhancing retail store security by detecting theft-like behavior in real-time.',
        features: ['YOLOv8 (Object Detection)','Flask (Web Deployment)','OpenCV (Video Processing)','Data Augmentation (for training variety)'],
        img: service1
        },
        {title: ' Email Spam Detection using SVM',
        desc: ' Email Spam Detection using Support Vector Machine (SVM)',
        features: ['Pandas & Numpy for Data Cleaning','Sklean for model training','TensorFlow for creating a Neural Net'],
        img: spamming,
        colab:'https://github.com/Hassanraza12345/Email-Spamming-SVM-.git',
        dataset:'https://drive.google.com/file/d/1pIkpzPFIWr2PlnekSpsouhtv7lvO39IH/view?usp=sharing'
        },
        {title: 'Handwritten Digit Recognition (KNN)',
        desc: 'Implemented a digit recognition system using the K-Nearest Neighbors (KNN) algorithm.',
        features: ['Sklean for model training','TensorFlow for creating a Neural Net'],
        img: handwritten,
        colab:'https://github.com/Hassanraza12345/Handwriting-Recognition-KNN-.git',
        },
        {title: 'Titanic Survival Prediction using Logistic Regression',
        desc: 'Built a predictive model using Logistic Regression to determine the survival likelihood of passengers aboard the Titanic — a classic binary classification problem.',
        features: ['Pandas & Numpy for Data Cleaning','Sklean for model training','TensorFlow for creating a Neural Net'],
        img: titanic,
        colab:'https://github.com/Hassanraza12345/Titanic-Survival-Prediction-using-Logistic-Regression.git',
        dataset:'https://drive.google.com/drive/folders/1zCvfI0TjZDP40rXZSjD2f4I6X-w08Y4H?usp=sharing'
        },
        {
            title: ' House Price Prediction using Linear Regression',
            desc: 'Developed a regression model using Linear Regression to predict housing prices based on various features. The model establishes a linear relationship between input features and the target price.',
            features: ['Scikit-Learn', 'Seaborn'],
            img: house_pre,
            colab:'https://github.com/Hassanraza12345/-House-Price-Prediction-using-Linear-Regression.git',
            dataset:'https://drive.google.com/drive/folders/1VEbJrPTF6tXepvAmsicIv0L3EekZg8_d?usp=sharing'
        },
        {
          title: 'Sentiment Analysis using Naive Bayes',
          desc: "Built a sentiment classification model using Multinomial Naive Bayes, a probabilistic algorithm based on Bayes's Theorem, to analyze the polarity of movie reviews.",
          features: ['Scikit-Learn', 'NLTK'],
          img: Sentiment,
          colab:'https://github.com/Hassanraza12345/Sentiment-Analysis-using-Naive-Bayes.git',
          dataset:'https://drive.google.com/drive/folders/1y3-eERTAbU7umN4FZRqhfWtlr9RMSt-8?usp=sharing'
        }

    ]


  return (
<div className="w-screen h-full bg-gray-900 text-white">
  {/* Section Title */}
  <div className="pt-10 text-4xl font-bold text-center">
    <h1 className="pt-10 pb-4">
      <span className="border-b-4 border-blue-500 pb-2">Projects</span>
    </h1>
  </div>

  {/* Project Cards */}
  <div className="flex flex-wrap justify-center gap-6 px-5 py-12">
    {services.map((item, index) => (
      <div
        key={index}
        className="relative bg-white text-gray-900 h-[31rem] w-full sm:w-[22rem] rounded-2xl shadow-lg 
                   transform transition-transform duration-300 hover:-translate-y-1 overflow-hidden"
      >
        {/* Project Image */}
        <img
          src={item.img}
          alt={item.title}
          className="h-48 w-full object-cover"
        />

        {/* Card Content */}
        <div className="p-5">
          <h2 className="text-[19px] font-bold mb-2">{item.title}</h2>
          <p className="text-sm text-gray-700">{item.desc}</p>

          {/* Features List */}
          <div className="space-y-2 text-gray-800 mt-4">
            {item.features.map((feature, ind) => (
              <div key={ind} className="p-0 m-0 flex items-start space-x-2">
                <svg
                  className="w-5 h-5 text-blue-600 mt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 111.414-1.414L8.414 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className='text-sm'>{feature}</span>

              </div>
            ))}
            {/* Bottom icons pinned to bottom */}
            <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center space-x-3">
              {item.colab && (
                <a href={item.colab} target="_blank" rel="noopener noreferrer">
                  <img src={colab} alt="Colab" className="h-10 w-10 hover:opacity-80" />
                </a>
              )}
              {item.dataset && (
                <a href={item.dataset} target="_blank" rel="noopener noreferrer">
                  <img src={drive} alt="Dataset" className="h-8 w-8 hover:opacity-80" />
                </a>
              )}
            </div>

          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  )
}

export default Projects