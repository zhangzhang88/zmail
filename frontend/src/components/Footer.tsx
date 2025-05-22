import React from 'react';
import { useTranslation } from 'react-i18next';
import Container from './Container';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  
  return (
    <footer className="border-t py-8 bg-muted/10">
      <Container>
        <div className="text-center text-sm text-muted-foreground">
          <p className="mb-3 font-medium">© {year} {t('app.title')}</p>
          <div className="flex justify-center items-center">
            <a 
              href="https://ztr8.uk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-200 font-medium"
            >
              未来已到
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer; 
