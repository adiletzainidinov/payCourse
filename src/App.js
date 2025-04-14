/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  theme,
  Image,
  HStack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  useDisclosure,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AiFillCheckCircle } from 'react-icons/ai';
import logoMuslimKids from './assets/MuslimKidsLogoReal.png';
import Details from './components/Details';
// import HelpersText from './components/HelpersText';

// -------------------------------------------------------------------------------------------------------------------------------------//

function App() {
  // eslint-disable-next-line no-unused-vars
  const { isOpen, onOpen, onClose } = useDisclosure();

  //Название страницы
  const info = {
    name: '@muslimkids.media',
  };

  const [isLoading, setIsLoading] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/');
      if (response.ok) {
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } else {
        throw new Error('Ошибка получения данных');
      }
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid
          minH="100vh"
          p={3}
          sx={{
            backgroundImage: `url(https://i.pinimg.com/736x/03/0a/6c/030a6c02bbf7fadf81051cdafd2ae883.jpg)`, // Добавил `url()`, чтобы правильно подставить изображение
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed', // Фон остаётся фиксированным при прокрутке
            backgroundBlendMode: 'soft-light',
            backgroundRepeat: 'no-repeat', // Убираем повторения изображения
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Добавил тёмный полупрозрачный слой для лучшей читаемости контента
          }}
        >
          <VStack marginTop="2em">
            {/* логотип */}

            <Link to="/" style={{ textDecoration: 'none' }}>
              {isLoading ? (
                <SkeletonCircle size="6em" />
              ) : (
                <Image
                  src={logoMuslimKids}
                  alt="Логотип канала muslimkids.media"
                  w="9em"
                  borderRadius="50%"
                  border="3px solid white"
                  boxShadow="0px 0px 30px rgba(0,0,0,0.5)"
                  as={motion.img}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition="linear 0.1s"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                />
              )}
            </Link>

            {/* Блок с названием */}
            <HStack
              as={motion.div}
              initial={{ x: '-50px' }}
              animate={{ x: '0px' }}
              transition="linear 0.1s"
            >
              {isLoading ? (
                <>
                  <SkeletonText
                    noOfLines={1}
                    width="10em"
                    skeletonHeight="10"
                  />
                  <Skeleton height="30px" width="30px" borderRadius="50%" />
                </>
              ) : (
                <>
                  <Text fontSize={30} fontWeight="bold" color="white">
                    {info.name}
                  </Text>
                  <Text
                    as={AiFillCheckCircle}
                    color="rgba(3, 177, 252)"
                    fontSize={30}
                    marginRight="auto"
                  />
                </>
              )}
            </HStack>

            {/* <HelpersText/> */}

            <Details />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
