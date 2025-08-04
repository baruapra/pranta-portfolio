import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Chip,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Divider
} from '@mui/material';
import {
  Close,
  GitHub,
  Launch,
  VideoLibrary,
  Analytics,
  Code,
  Group,
  Store
} from '@mui/icons-material';

interface ProjectModalProps {
  open: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    longDescription: string;
    technologies: string[];
    achievements: string[];
    challenges: string[];
    images?: string[];
    links?: {
      demo?: string;
      github?: string;
      video?: string;
      appStore?: string;
    };
    metrics?: {
      users?: string;
      engagement?: string;
      performance?: string;
    };
    teamSize?: number;
    duration: string;
  };
}

const ProjectModal: React.FC<ProjectModalProps> = ({ open, onClose, project }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h4" component="h2">
            {project.title}
          </Typography>
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </Box>
      </DialogTitle>
      
      <DialogContent dividers>
        <Grid container spacing={3}>
          {/* Project Images */}
          {project.images && project.images.length > 0 && (
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
                {project.images.map((image, index) => (
                  <Box
                    key={index}
                    component="img"
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    sx={{
                      maxWidth: '300px',
                      maxHeight: '200px',
                      objectFit: 'contain',
                      border: '1px solid #ddd',
                      borderRadius: 1
                    }}
                  />
                ))}
              </Box>
            </Grid>
          )}

          {/* Description */}
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Overview
            </Typography>
            <Typography variant="body1" paragraph>
              {project.longDescription}
            </Typography>
          </Grid>

          {/* Technologies */}
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Technologies Used
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
              {project.technologies.map((tech) => (
                <Chip key={tech} label={tech} variant="outlined" />
              ))}
            </Box>
          </Grid>

          {/* Metrics & Stats */}
          {project.metrics && (
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                <Analytics sx={{ mr: 1 }} />
                Key Metrics
              </Typography>
              <List dense>
                {project.metrics.users && (
                  <ListItem>
                    <ListItemText primary="Users" secondary={project.metrics.users} />
                  </ListItem>
                )}
                {project.metrics.engagement && (
                  <ListItem>
                    <ListItemText primary="Engagement" secondary={project.metrics.engagement} />
                  </ListItem>
                )}
                {project.metrics.performance && (
                  <ListItem>
                    <ListItemText primary="Performance" secondary={project.metrics.performance} />
                  </ListItem>
                )}
              </List>
            </Grid>
          )}

          {/* Project Details */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              <Code sx={{ mr: 1 }} />
              Project Details
            </Typography>
            <List dense>
              <ListItem>
                <ListItemText primary="Duration" secondary={project.duration} />
              </ListItem>
              {project.teamSize && (
                <ListItem>
                  <Group sx={{ mr: 2, color: 'text.secondary' }} />
                  <ListItemText 
                    primary="Team Size" 
                    secondary={`${project.teamSize} members`}
                  />
                </ListItem>
              )}
            </List>
          </Grid>

          {/* Achievements */}
          {project.achievements.length > 0 && (
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Key Achievements
              </Typography>
              <List>
                {project.achievements.map((achievement, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={`• ${achievement}`} />
                  </ListItem>
                ))}
              </List>
            </Grid>
          )}

          {/* Technical Challenges */}
          {project.challenges.length > 0 && (
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Technical Challenges & Solutions
              </Typography>
              <List>
                {project.challenges.map((challenge, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={`• ${challenge}`} />
                  </ListItem>
                ))}
              </List>
            </Grid>
          )}
        </Grid>
      </DialogContent>

      <DialogActions>
        {project.links?.github && (
          <Button
            startIcon={<GitHub />}
            href={project.links.github}
            target="_blank"
            variant="outlined"
          >
            View Code
          </Button>
        )}
        {project.links?.demo && (
          <Button
            startIcon={<Launch />}
            href={project.links.demo}
            target="_blank"
            variant="outlined"
          >
            Live Demo
          </Button>
        )}
        {project.links?.video && (
          <Button
            startIcon={<VideoLibrary />}
            href={project.links.video}
            target="_blank"
            variant="outlined"
          >
            Watch Demo
          </Button>
        )}
        {project.links?.appStore && (
          <Button
            startIcon={<Store />}
            href={project.links.appStore}
            target="_blank"
            variant="outlined"
          >
            App Store
          </Button>
        )}
        <Button onClick={onClose} variant="contained">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProjectModal;