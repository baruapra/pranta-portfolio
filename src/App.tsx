import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Button, 
  Grid, 
  Card, 
  CardContent, 
  CardActions,
  Chip,
  Avatar 
} from '@mui/material';
import { 
  Email, 
  LinkedIn, 
  GitHub, 
  Download,
  Code,
  Analytics,
  School
} from '@mui/icons-material';
import ProjectModal from './components/ProjectModal';
import { projectsData } from './data/projects';

function App() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleLearnMore = (projectKey: string) => {
    setSelectedProject(projectKey);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Box sx={{ py: 8, textAlign: 'center' }}>
        <Avatar 
          sx={{ width: 150, height: 150, mx: 'auto', mb: 3 }}
          alt="Pranta Nir Barua"
          src="/Headshot.jpg"
        />
        <Typography variant="h2" component="h1" gutterBottom>
          Pranta Nir Barua
        </Typography>
        <Typography variant="h4" component="h2" color="text.secondary" gutterBottom>
          Software Engineer & Data Scientist
        </Typography>
        <Typography variant="h6" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
          Computer Science & Data Science student at Michigan State University, 
          passionate about building scalable applications and AI-driven solutions
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button 
            variant="contained" 
            size="large"
            startIcon={<Email />}
            onClick={() => window.open('mailto:baruapra@msu.edu', '_blank')}
          >
            Contact Me
          </Button>
          <Button 
            variant="outlined" 
            size="large"
            startIcon={<Download />}
            href="/PrantaNirBarua_Resume (1).pdf"
            download
          >
            Download Resume
          </Button>
          <Button 
            variant="outlined" 
            size="large"
            href="/PrantaNirBarua_Resume (1).pdf"
            target="_blank"
          >
            View Resume
          </Button>
          <Button 
            variant="outlined" 
            size="large"
            startIcon={<LinkedIn />}
            href="https://linkedin.com/in/pranta-nir/"
            target="_blank"
          >
            LinkedIn
          </Button>
          <Button 
            variant="outlined" 
            size="large"
            startIcon={<GitHub />}
            href="https://github.com/baruapra"
            target="_blank"
          >
            GitHub
          </Button>
        </Box>
      </Box>

      {/* Quick Stats */}
      <Box sx={{ py: 4 }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: 'center', height: '100%' }}>
              <CardContent>
                <School sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  Education
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Dual Bachelor's in Computer Science & Data Science
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: 'center', height: '100%' }}>
              <CardContent>
                <Code sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  11,000+ Users
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  MSU Orientation App serving thousands of students annually
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: 'center', height: '100%' }}>
              <CardContent>
                <Analytics sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  AI & Full-Stack
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Expertise in AI/ML, React, Python, and enterprise solutions
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Featured Projects */}
      <Box sx={{ py: 6 }}>
        <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
          Featured Projects
        </Typography>
        <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 4 }}>
          Here are some of my most impactful projects
        </Typography>
        
        <Grid container spacing={4}>
          {/* MSU Orientation App */}
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom>
                  Michigan State Orientation App
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Mobile app serving 11,000+ students annually with 40% engagement increase. 
                  Built with React Native, Node.js, and Firebase with Okta SSO integration.
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Chip label="React.js" size="small" sx={{ mr: 1, mb: 1 }} />
                  <Chip label="Node.js" size="small" sx={{ mr: 1, mb: 1 }} />
                  <Chip label="Firebase" size="small" sx={{ mr: 1, mb: 1 }} />
                  <Chip label="Okta SSO" size="small" sx={{ mr: 1, mb: 1 }} />
                </Box>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => handleLearnMore('msuApp')}>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Agentic Collaborator */}
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom>
                  Agentic Collaborator for Ally Financial
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  AI-powered email analysis tool using OpenAI API for sentiment analysis 
                  and consensus building with multi-agent coordination architecture.
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Chip label="Python" size="small" sx={{ mr: 1, mb: 1 }} />
                  <Chip label="Flask" size="small" sx={{ mr: 1, mb: 1 }} />
                  <Chip label="LangChain" size="small" sx={{ mr: 1, mb: 1 }} />
                  <Chip label="OpenAI API" size="small" sx={{ mr: 1, mb: 1 }} />
                </Box>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => handleLearnMore('agenticCollaborator')}>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/* GraphRoots */}
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom>
                  GraphRoots
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Interactive graph-based visualization tool to analyze relationships between companies 
                  and employees. Built for Grassroots Midwest with modular algorithms.
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Chip label="Python" size="small" sx={{ mr: 1, mb: 1 }} />
                  <Chip label="Flask" size="small" sx={{ mr: 1, mb: 1 }} />
                  <Chip label="React" size="small" sx={{ mr: 1, mb: 1 }} />
                  <Chip label="Google Cloud SQL" size="small" sx={{ mr: 1, mb: 1 }} />
                </Box>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => handleLearnMore('graphRoots')}>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Hurricane Prediction System */}
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom>
                  Hurricane Prediction System
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Web-based system displaying and comparing hurricane predictions from National Hurricane 
                  Center and machine learning models for improved forecast visualization.
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Chip label="HTML/CSS" size="small" sx={{ mr: 1, mb: 1 }} />
                  <Chip label="JavaScript" size="small" sx={{ mr: 1, mb: 1 }} />
                  <Chip label="Machine Learning" size="small" sx={{ mr: 1, mb: 1 }} />
                  <Chip label="Data Visualization" size="small" sx={{ mr: 1, mb: 1 }} />
                </Box>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => handleLearnMore('hurricanePrediction')}>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Skills */}
      <Box sx={{ py: 6, backgroundColor: 'grey.50' }}>
        <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
          Technical Skills
        </Typography>
        
        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Languages
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {['Python', 'JavaScript', 'TypeScript', 'C++', 'Java', 'SQL', 'R'].map((skill) => (
                <Chip key={skill} label={skill} variant="outlined" />
              ))}
            </Box>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Frameworks & Libraries
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {['React', 'Flask', 'Node.js', 'Material-UI', 'LangChain', 'FastAPI'].map((skill) => (
                <Chip key={skill} label={skill} variant="outlined" />
              ))}
            </Box>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Tools & Platforms
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {['Firebase', 'Google Cloud', 'Docker', 'Git', 'PostgreSQL', 'MongoDB'].map((skill) => (
                <Chip key={skill} label={skill} variant="outlined" />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Footer */}
      <Box sx={{ py: 4, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          © 2025 Pranta Nir Barua. Built with React and Material-UI.
        </Typography>
      </Box>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          open={modalOpen}
          onClose={handleCloseModal}
          project={projectsData[selectedProject as keyof typeof projectsData]}
        />
      )}
    </Container>
  );
}

export default App;