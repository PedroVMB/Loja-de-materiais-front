'use client';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import styles from './Header.module.scss';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar className={styles.toolbar}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Página Principal
            </Typography>
            <Button color="inherit">
              <Link href="/home">Home</Link>
            </Button>
            <Button color="inherit">
              <Link href="/produtos">Produtos</Link>
            </Button>
            <Button color="inherit">
              <Link href="/contato">Contato</Link>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}