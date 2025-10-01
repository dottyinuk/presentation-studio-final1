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
  buttonPurple: {
    backgroundColor: '#9c27b0'
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
  templateButtonActive: {
    backgroundColor: '#9c27b0',
    border: '1px solid #ba68c8'
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
  slider: {
    width: '100%',
    margin: '10px 0'
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
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      x: 0, y: 0, z: 0, rotation: 0, scale: 1
    },
    {
      id: 2,
      title: 'Easy to Use',
      content: 'Drag, drop, and customize your slides with our intuitive interface',
      background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      x: 1200, y: 0, z: 0, rotation: 0, scale: 1
    },
    {
      id: 3,
      title: 'Export & Share',
      content: 'Export your presentations as HTML files and share them anywhere',
      background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      x: 2400, y: 0, z: 0, rotation: 0, scale: 1
    }
  ])
  
  const [currentSlide, setCurrentSlide] = useState(1)
  const [isPreview, setIsPreview] = useState(false)
  const [activeTemplate, setActiveTemplate] = useState('')

  const templates = [
    {
      name: 'Basic Flow',
      description: 'Simple left-to-right progression',
      icon: '→',
      apply: () => {
        const updatedSlides = slides.map((slide, index) => ({
          ...slide,
          x: index * 1200,
          y: 0,
          z: 0,
          rotation: 0,
          scale: 1
        }))
        setSlides(updatedSlides)
        setActiveTemplate('Basic Flow')
      }
    },
    {
      name: 'Zoom & Pan',
      description: 'Dynamic zoom effects with panning',
      icon: '🔍',
      apply: () => {
        const updatedSlides = slides.map((slide, index) => ({
          ...slide,
          x: index * 800,
          y: index * 200,
          z: index * -500,
          rotation: 0,
          scale: 1 + (index * 0.3)
        }))
        setSlides(updatedSlides)
        setActiveTemplate('Zoom & Pan')
      }
    },
    {
      name: 'Rotation Carousel',
      description: 'Circular arrangement with rotation',
      icon: '🎠',
      apply: () => {
        const radius = 800
        const updatedSlides = slides.map((slide, index) => {
          const angle = (index * 360) / slides.length
          const radian = (angle * Math.PI) / 180
          return {
            ...slide,
            x: Math.cos(radian) * radius,
            y: Math.sin(radian) * radius,
            z: 0,
            rotation: angle,
            scale: 1
          }
        })
        setSlides(updatedSlides)
        setActiveTemplate('Rotation Carousel')
      }
    },
    {
      name: '3D Cube',
      description: 'Cube-like transitions between slides',
      icon: '🎲',
      apply: () => {
        const positions = [
          { x: 0, y: 0, z: 0, rotation: 0 },
          { x: 1000, y: 0, z: 0, rotation: 90 },
          { x: 0, y: 1000, z: 0, rotation: 180 },
          { x: -1000, y: 0, z: 0, rotation: 270 },
          { x: 0, y: 0, z: 1000, rotation: 0 },
          { x: 0, y: 0, z: -1000, rotation: 0 }
        ]
        const updatedSlides = slides.map((slide, index) => ({
          ...slide,
          ...positions[index % positions.length],
          scale: 1
        }))
        setSlides(updatedSlides)
        setActiveTemplate('3D Cube')
      }
    },
    {
      name: 'Spiral Journey',
      description: 'Spiral path with dynamic positioning',
      icon: '🌀',
      apply: () => {
        const updatedSlides = slides.map((slide, index) => {
          const angle = index * 90
          const radius = index * 300
          const radian = (angle * Math.PI) / 180
          return {
            ...slide,
            x: Math.cos(radian) * radius,
            y: Math.sin(radian) * radius,
            z: index * -200,
            rotation: angle,
            scale: 1 - (index * 0.1)
          }
        })
        setSlides(updatedSlides)
        setActiveTemplate('Spiral Journey')
      }
    },
    {
      name: 'Wave Motion',
      description: 'Flowing wave-like progression',
      icon: '🌊',
      apply: () => {
        const updatedSlides = slides.map((slide, index) => ({
          ...slide,
          x: index * 1000,
          y: Math.sin(index * 0.8) * 400,
          z: Math.cos(index * 0.5) * 200,
          rotation: index * 15,
          scale: 1 + Math.sin(index * 0.3) * 0.2
        }))
        setSlides(updatedSlides)
        setActiveTemplate('Wave Motion')
      }
    }
  ]

  const addSlide = () => {
    const newSlide = {
      id: Date.now(),
      title: `Slide ${slides.length + 1}`,
      content: 'Add your content here...',
      background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      x: slides.length * 1200,
      y: 0,
      z: 0,
      rotation: 0,
      scale: 1
    }
    setSlides([...slides, newSlide])
  }

  const deleteSlide = (id) => {
    if (slides.length > 1) {
      setSlides(slides.filter(slide => slide.id !== id))
      if (currentSlide === id) {
        setCurrentSlide(slides[0].id)
      }
    }
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
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="https://cdn.jsdelivr.net/npm/impress.js@2.0.0/js/impress.min.js"></script>
    <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 0; }
        .step { 
            width: 800px; height: 600px; padding: 40px; border-radius: 10px; 
            color: white; display: flex; flex-direction: column; 
            justify-content: center; align-items: center; text-align: center;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }
        .step h1 { font-size: 3em; margin-bottom: 20px; }
        .step p { font-size: 1.5em; line-height: 1.6; }
    </style>
</head>
<body>
    <div id="impress">
        ${slides.map(slide => `
        <div class="step" 
             data-x="${slide.x}" 
             data-y="${slide.y}" 
             data-z="${slide.z}" 
             data-rotate="${slide.rotation}" 
             data-scale="${slide.scale}"
             style="background: ${slide.background}">
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
          <p style={styles.subtitle}>Create stunning interactive presentations with custom animations</p>
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
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div style={{flex: 1}}>
                  <div style={{fontWeight: 'bold', fontSize: '14px'}}>{slide.title}</div>
                  <div style={{fontSize: '12px', opacity: 0.8, marginTop: '5px'}}>
                    {slide.content.substring(0, 30)}...
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    deleteSlide(slide.id)
                  }}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#ff6b6b',
                    cursor: 'pointer',
                    padding: '5px'
                  }}
                >
                  🗑️
                </button>
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
            <h3>3D Positioning:</h3>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '10px'}}>
              <div>
                <label>X Position: {currentSlideData.x}px</label>
                <input
                  type="range"
                  min="-2000"
                  max="2000"
                  value={currentSlideData.x}
                  onChange={(e) => updateSlide(currentSlide, { x: parseInt(e.target.value) })}
                  style={styles.slider}
                />
              </div>
              <div>
                <label>Y Position: {currentSlideData.y}px</label>
                <input
                  type="range"
                  min="-2000"
                  max="2000"
                  value={currentSlideData.y}
                  onChange={(e) => updateSlide(currentSlide, { y: parseInt(e.target.value) })}
                  style={styles.slider}
                />
              </div>
              <div>
                <label>Z Position: {currentSlideData.z}px</label>
                <input
                  type="range"
                  min="-1000"
                  max="1000"
                  value={currentSlideData.z}
                  onChange={(e) => updateSlide(currentSlide, { z: parseInt(e.target.value) })}
                  style={styles.slider}
                />
              </div>
              <div>
                <label>Rotation: {currentSlideData.rotation}°</label>
                <input
                  type="range"
                  min="0"
                  max="360"
                  value={currentSlideData.rotation}
                  onChange={(e) => updateSlide(currentSlide, { rotation: parseInt(e.target.value) })}
                  style={styles.slider}
                />
              </div>
              <div>
                <label>Scale: {currentSlideData.scale}x</label>
                <input
                  type="range"
                  min="0.1"
                  max="3"
                  step="0.1"
                  value={currentSlideData.scale}
                  onChange={(e) => updateSlide(currentSlide, { scale: parseFloat(e.target.value) })}
                  style={styles.slider}
                />
              </div>
            </div>
          </div>

          <div style={{marginTop: '20px'}}>
            <h3>Background Colors:</h3>
            <div style={{display: 'flex', gap: '10px', marginTop: '10px'}}>
              {[
                'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
                'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
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
          {activeTemplate && (
            <div style={{marginBottom: '15px', padding: '10px', backgroundColor: 'rgba(156, 39, 176, 0.3)', borderRadius: '5px'}}>
              <strong>Active: {activeTemplate}</strong>
            </div>
          )}
          
          {templates.map((template) => (
            <button
              key={template.name}
              style={{
                ...styles.templateButton,
                ...(activeTemplate === template.name ? styles.templateButtonActive : {})
              }}
              onClick={template.apply}
            >
              <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '5px'}}>
                <span style={{fontSize: '16px'}}>{template.icon}</span>
                <span style={{fontWeight: 'bold'}}>{template.name}</span>
              </div>
              <div style={{fontSize: '12px', opacity: 0.8}}>{template.description}</div>
            </button>
          ))}

          <div style={{marginTop: '30px', padding: '15px', backgroundColor: 'rgba(33, 150, 243, 0.3)', borderRadius: '5px'}}>
            <h3 style={{marginBottom: '10px'}}>💡 Pro Tips</h3>
            <ul style={{fontSize: '12px', lineHeight: '1.5'}}>
              <li>• Click templates to apply animations</li>
              <li>• Use 3D positioning for custom layouts</li>
              <li>• Preview to see smooth transitions</li>
              <li>• Export creates standalone HTML files</li>
              <li>• Try combining different templates</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
