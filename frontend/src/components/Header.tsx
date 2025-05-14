import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import HeaderMailbox from './HeaderMailbox';
import Container from './Container';
import { EMAIL_DOMAINS, DEFAULT_EMAIL_DOMAIN } from '../config';

interface HeaderProps {
  mailbox: Mailbox | null;
  onMailboxChange?: (mailbox: Mailbox) => void;
  isLoading?: boolean;
}

const Header: React.FC<HeaderProps> = ({ 
  mailbox = null, 
  onMailboxChange = () => {}, 
  isLoading = false 
}) => {
  const { t } = useTranslation();
  
  return (
    <header className="border-b shadow-sm bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="text-2xl font-bold hover:text-primary transition-colors">
            {t('app.title')}
          </Link>
          
          {mailbox && (
            <div className="flex items-center bg-muted/50 rounded-lg px-4 py-2 shadow-sm hover:bg-muted/60 transition-colors">
              <HeaderMailbox 
                mailbox={mailbox} 
                onMailboxChange={onMailboxChange}
                domain={DEFAULT_EMAIL_DOMAIN}
                domains={EMAIL_DOMAINS}
                isLoading={isLoading}
              />
              <div className="ml-4 pl-4 border-l border-muted-foreground/20 flex items-center gap-2">
                <LanguageSwitcher />
                <a
                  href="https://github.com/zhangzhang88"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-lg transition-all duration-200 hover:bg-primary/20 hover:text-primary hover:scale-105"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <i className="fab fa-github text-lg"></i>
                </a>
              </div>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Header; 
