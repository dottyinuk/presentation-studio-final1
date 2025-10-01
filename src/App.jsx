import { useState } from 'react'

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    fontFamily: 'Arial, sans-serif'
  },
  header: {
    padding: '20px',
    borderBottom: '1px solid rgba(255,255,255,0.2)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold'
  },
  subtitle: {
    color: '#b3d9ff',
    marginTop: '5px'
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '0 5px'
  },
  buttonBlue: {
    backgroundColor: '#2196F3'
  },
  main: {
    display: 'flex',
    height: 'calc(100vh - 80px)'
  },
  sidebar: {
    width: '250px',
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: '20px',
    borderRight: '1px solid rgba(255,255,255,0.2)'
  },
  content: {
    flex: 1,
    padding: '20px'
  },
  templates: {
    width: '250px',
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: '20px',
    borderLeft: '1px solid rgba(255,255,255,0.2)'
  },
  slideItem: {
    padding: '10px',
    margin: '5px 0',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: '5px',
    cursor: 'pointer',
    border: '1px solid rgba(255,255,255,0.2)'
  },
  slideItemActive: {
    backgroundColor: '#9c27b0',
    border: '1px solid #ba68c8'
  },
  templateButton: {
    width: '100%',
    padding: '15px',
    margin: '10px 0',
    backgroundColor: 'rgba(255,255,255,0.1)',
    color: 'white',
    border: '1px solid rgba(255,255,255,0.2)',
    borderRadius: '5px',
    cursor: 'pointer',
    textAlign: 'left'
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    backgroundColor: 'rgba(255,255,255,0.1)',
    border: '1px solid rgba(255,255,255,0.2)',
    borderRadius: '5px',
    color: 'white'
  },
  textarea: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    backgroundColor: 'rgba(255,255,255,0.1)',
    border: '1px solid rgba(255,255,255,0.2)',
    borderRadius: '5px',
    color: 'white',
    minHeight: '100px',
    resize: 'vertical'
  },
  preview: {
    minHeight: '100vh',
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  slide: {
    width: '80%',
    maxWidth: '800px',
    height: '400px',
    padding: '40px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    transition: 'all 1s ease'
  },
  slideTitle: {
    fontSize: '3rem',
    marginBottom: '20px',
    fontWeight: 'bold'
  },
  slideContent: {
    fontSize: '1.5rem',
    lineHeight: '1.6'
  },
  controls: {
    position: 'fixed',
    top: '20px',
    left: '20px',
    zIndex: 1000
  },
  indicators: {
    position: 'fixed',
    bottom: '30px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '10px'
  },
  indicator: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255,255,255,0.5)',
    cursor: 'pointer',
    transition: 'all 0.3s'
  },
  indicatorActive: {
    backgroundColor: 'white'
  }
}

function App() {
  const [slides, setSlides] = useState([
    {
      id: 1,
      title: 'Welcome to Presentation Studio',
      content: 'Create stunning interactive presentations with custom animations and effects',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 2,
      title: 'Easy to Use',
      content: 'Drag, drop, and customize your slides with our intuitive interface',
      background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      id: 3,
      title: 'Export & Share',
      content: 'Export your presentations as HTML files and share them anywhere',
      background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    }
  ])
  
  const [currentSlide, setCurrentSlide] = useState(1)
  const [isPreview, setIsPreview] = useState(false)

  const templates = [
    {
      name: 'Basic Flow',
      description: 'Simple left-to-right progression',
      apply: () => alert('Template applied! In a full version, this would rearrange your slides.')
    },
    {
      name: 'Zoom & Pan',
      description: 'Dynamic zoom effects',
      apply: () => alert('Template applied! This would add zoom animations.')
    },
    {
      name: 'Rotation Carousel',
      description: 'Circular arrangement',
      apply: () => alert('Template applied! This would arrange slides in a circle.')
    }
  ]

  const addSlide = () => {
    const newSlide = {
      id: Date.now(),
      title: `Slide ${slides.length + 1}`,
      content: 'Add your content here...',
      background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    }
    setSlides([...slides, newSlide])
  }

  const updateSlide = (id, updates) => {
    setSlides(slides.map(slide => 
      slide.id === id ? { ...slide, ...updates } : slide
    ))
  }

  const exportHTML = () => {
    const html = `
<!DOCTYPE html>
<html>
<head>
    <title>My Presentation</title>
    <script src="https://cdn.jsdelivr.net/npm/impress.js@2.0.0/js/impress.min.js"></script>
    <style>
        body { font-family: Arial, sans-serif; margin: 0; }
        .step { 
            width: 800px; height: 600px; padding: 40px; border-radius: 10px; 
            color: white; display: flex; flex-direction: column; 
            justify-content: center; align-items: center; text-align: center;
        }
        .step h1 { font-size: 3em; margin-bottom: 20px; }
        .step p { font-size: 1.5em; }
    </style>
</head>
<body>
    <div id="impress">
        ${slides.map((slide, index) => `
        <div class="step" data-x="${index * 1200}" data-y="0" style="background: ${slide.background}">
            <h1>${slide.title}</h1>
            <p>${slide.content}</p>
        </div>`).join('')}
    </div>
    <script>impress().init();</script>
</body>
</html>`

    const blob = new Blob([html], { type: 'text/html' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'presentation.html'
    a.click()
    URL.revokeObjectURL(url)
  }

  const currentSlideData = slides.find(s => s.id === currentSlide) || slides[0]

  if (isPreview) {
    return (
      <div style={styles.preview}>
        <div style={styles.controls}>
          <button 
            style={styles.button}
            onClick={() => setIsPreview(false)}
          >
            ← Edit Mode
          </button>
          <button 
            style={{...styles.button, ...styles.buttonBlue}}
            onClick={exportHTML}
          >
            Export HTML
          </button>
        </div>
        
        <div 
          style={{
            ...styles.slide,
            background: currentSlideData.background
          }}
        >
          <h1 style={styles.slideTitle}>{currentSlideData.title}</h1>
          <p style={styles.slideContent}>{currentSlideData.content}</p>
        </div>
        
        <div style={styles.indicators}>
          {slides.map((slide) => (
            <div
              key={slide.id}
              style={{
                ...styles.indicator,
                ...(slide.id === currentSlide ? styles.indicatorActive : {})
              }}
              onClick={() => setCurrentSlide(slide.id)}
            />
          ))}
        </div>
        
        <div style={{position: 'fixed', top: '20px', right: '20px', fontSize: '14px'}}>
          Slide {slides.findIndex(s => s.id === currentSlide) + 1} of {slides.length}
        </div>
      </div>
    )
  }

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div>
          <h1 style={styles.title}>✨ Presentation Studio</h1>
          <p style={styles.subtitle}>Create stunning interactive presentations</p>
        </div>
        <div>
          <button 
            style={styles.button}
            onClick={() => setIsPreview(true)}
          >
            👁 Preview
          </button>
          <button 
            style={{...styles.button, ...styles.buttonBlue}}
            onClick={exportHTML}
          >
            📥 Export HTML
          </button>
        </div>
      </header>

      <div style={styles.main}>
        <div style={styles.sidebar}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px'}}>
            <h2>Slides ({slides.length})</h2>
            <button style={styles.button} onClick={addSlide}>+ Add</button>
          </div>
          
          {slides.map((slide) => (
            <div
              key={slide.id}
              style={{
                ...styles.slideItem,
                ...(slide.id === currentSlide ? styles.slideItemActive : {})
              }}
              onClick={() => setCurrentSlide(slide.id)}
            >
              <div style={{fontWeight: 'bold', fontSize: '14px'}}>{slide.title}</div>
              <div style={{fontSize: '12px', opacity: 0.8, marginTop: '5px'}}>
                {slide.content.substring(0, 50)}...
              </div>
            </div>
          ))}
        </div>

        <div style={styles.content}>
          <h2>Edit Slide {slides.findIndex(s => s.id === currentSlide) + 1}</h2>
          
          <div>
            <label>Title:</label>
            <input
              style={styles.input}
              value={currentSlideData.title}
              onChange={(e) => updateSlide(currentSlide, { title: e.target.value })}
              placeholder="Enter slide title..."
            />
          </div>
          
          <div>
            <label>Content:</label>
            <textarea
              style={styles.textarea}
              value={currentSlideData.content}
              onChange={(e) => updateSlide(currentSlide, { content: e.target.value })}
              placeholder="Enter slide content..."
            />
          </div>

          <div style={{marginTop: '20px'}}>
            <h3>Background Colors:</h3>
            <div style={{display: 'flex', gap: '10px', marginTop: '10px'}}>
              {[
                'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
                'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
              ].map((bg, index) => (
                <div
                  key={index}
                  style={{
                    width: '40px',
                    height: '40px',
                    background: bg,
                    borderRadius: '5px',
                    cursor: 'pointer',
                    border: currentSlideData.background === bg ? '3px solid white' : '1px solid rgba(255,255,255,0.3)'
                  }}
                  onClick={() => updateSlide(currentSlide, { background: bg })}
                />
              ))}
            </div>
          </div>
        </div>

        <div style={styles.templates}>
          <h2>Animation Templates</h2>
          
          {templates.map((template) => (
            <button
              key={template.name}
              style={styles.templateButton}
              onClick={template.apply}
            >
              <div style={{fontWeight: 'bold', marginBottom: '5px'}}>{template.name}</div>
              <div style={{fontSize: '12px', opacity: 0.8}}>{template.description}</div>
            </button>
          ))}

          <div style={{marginTop: '30px', padding: '15px', backgroundColor: 'rgba(33, 150, 243, 0.3)', borderRadius: '5px'}}>
            <h3 style={{marginBottom: '10px'}}>💡 Pro Tips</h3>
            <ul style={{fontSize: '12px', lineHeight: '1.5'}}>
              <li>• Use templates as starting points</li>
              <li>• Preview before exporting</li>
              <li>• Export creates standalone HTML files</li>
              <li>• Works on all modern browsers</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
