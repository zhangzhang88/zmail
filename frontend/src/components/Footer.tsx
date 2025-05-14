import React from 'react';
import { useTranslation } from 'react-i18next';
import Container from './Container';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  
  return (
    <footer className="border-t py-6">
      <Container>
        <div className="text-center text-sm text-muted-foreground">
          <p className="mb-2">© {year} {t('app.title')}</p>
          <div className="flex justify-center items-center space-x-4">
            <a 
              href="https://ztr8.online" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
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
