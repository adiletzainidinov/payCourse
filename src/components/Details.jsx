import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
  Button,
  Icon,
  Flex,
  useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react';
import { FaWhatsapp, FaClipboard } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';

const Details = () => {
  const devlinksHelp = [
    {
      id: 1,
      url: 'https://yt3.googleusercontent.com/NIKFAdA-99YFgwI35mQfQfBqtCrrKGCTuwD7NGIXXJ76F6aF1g9zaXGp3KdbH4mdR3uV1TFkIg=s900-c-k-c0x00ffffff-no-rj',
      imgTitle: 'MBANK',
      text: '4177 4901 7742 7152',
      textFirst: '+996 998 08 38 28',
      textSecond: (
        <>
          Адилет З. <br /> ADILET ZAINIDINOV
        </>
      ),
    },
    {
      id: 2,
      url: 'https://static.tildacdn.one/tild6631-3335-4631-b236-333435663230/bakai_icon_with_back.png',
      imgTitle: 'BakAi',
      text: '4714 2400 0199 0424',
      textFirst: '+996 998 08 38 28',
      textSecond: (
        <>
          Адилет З. <br /> ADILET ZAINIDINOV
        </>
      ),
    },
  ];

  const accordionWidth = useBreakpointValue({ base: '100%', md: '80%' });
  const textWidth = useBreakpointValue({ base: '100%', md: '80%', lg: '60%' });

  return (
    <>
      <Text
        fontSize="2xl"
        fontWeight="bold"
        color="white"
        mb="1em"
        textAlign="center"
      >
        Реквизиты
      </Text>
      <Accordion allowToggle width={accordionWidth} mx="auto">
        {devlinksHelp.map(link => (
          <AccordionItem key={link.id} border="none" mb="1em">
            <AccordionButton
              bg="rgba(255,255,255,0.9)"
              _hover={{ bg: 'rgba(240,240,240,1)' }}
              borderRadius="8px"
              boxShadow="md"
              style={{
                width: '100%',
                maxWidth: '280px',
                margin: '0 auto',
                marginBottom: '10px',
              }}
            >
              <Box
                as="span"
                flex="1"
                textAlign="left"
                fontWeight="bold"
                fontSize="lg"
              >
                {link.id}. {link.imgTitle}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel
              pb={4}
              bg="white"
              borderRadius="8px"
              boxShadow="sm"
              style={{ width: '100%', maxWidth: '280px', margin: '0 auto' }}
            >
              <Flex direction="column" alignItems="center" mb="1em">
                <img
                  src={link.url}
                  alt="Bank Logo"
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                  }}
                />
              </Flex>
              <Text fontSize="md" style={{ marginBottom: '10px' }}>
                <span style={{ fontWeight: 'bold' }}>Номер карты:</span> <br />{' '}
                {link.text} <br />
                <Button
                  style={{ marginTop: 10, marginBottom: 20 }}
                  ml="1em"
                  onClick={() => navigator.clipboard.writeText(link.text)}
                  size="sm"
                  colorScheme="blue"
                  leftIcon={<FaClipboard />}
                  variant="outline"
                >
                  Копировать
                </Button>
              </Text>
              <Text fontSize="md" style={{ marginBottom: '10px' }}>
                <span style={{ fontWeight: 'bold' }}>По номеру Телефона:</span>
                <br /> {link.textFirst} <br />
                <Button
                  style={{ marginTop: 10, marginBottom: 20 }}
                  ml="1em"
                  onClick={() => navigator.clipboard.writeText(link.textFirst)}
                  size="sm"
                  colorScheme="blue"
                  leftIcon={<FaClipboard />}
                  variant="outline"
                >
                  Копировать
                </Button>
              </Text>
              <Text
                style={{ marginBottom: '10px' }}
                fontSize="md"
                fontWeight="bold"
              >
                Имя: {link.textSecond}
              </Text>
              <Text fontSize="sm" mt="1em" color="gray.600" textAlign="center">
                Чтобы перевести деньги, скопируйте номер карты или
                воспользуйтесь приложением вашего банка.
                <br />
                <br /> После оплаты отправьте чек в мой Telegram, и я добавлю
                вас в Telegram-группу до начала учёбы.
                <br /> Мой Telegram:
                <a
                  href="https://t.me/Makka567"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span
                    style={{
                      fontWeight: 'bold',
                      color: '#007bff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 7,
                    }}
                  >
                    Перейти
                    <FaTelegramPlane />
                  </span>
                </a>
              </Text>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>

      {/* Инструкция и кнопка WhatsApp */}
      <Text
        fontSize="lg"
        fontWeight="bold"
        color="white"
        mt="2em"
        textAlign="center"
        width={textWidth}
        mx="auto"
        w={'100%'}
        maxW={'280px'}
      >
        Если у вас возникли трудности с переводом, свяжитесь со мной через
        WhatsApp:
      </Text>
      <Box textAlign="center" mt="1em">
        <Button
          as="a"
          href="https://wa.me/996998083828"
          target="_blank"
          rel="noopener noreferrer"
          colorScheme="green"
          size="lg"
          leftIcon={<Icon as={FaWhatsapp} />}
          _hover={{ transform: 'scale(1.05)' }}
        >
          Написать в WhatsApp
        </Button>
      </Box>

      {/* Переход на сайт */}
      <Text
        fontSize="lg"
        fontWeight="bold"
        color="white"
        mt="2em"
        textAlign="center"
        width={textWidth}
        mx="auto"
        w={'100%'}
        maxW={'280px'}
      >
        Перейдя по ссылке ниже, вы сможете узнать подробнее о нашем курсе
      </Text>
      <Box textAlign="center" mt="1em">
        <Button
          as="a"
          href="https://m-three-weld.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          colorScheme="red"
          size="lg"
          // leftIcon={<Icon as={FiYoutube} />}
          _hover={{ transform: 'scale(1.05)' }}
        >
          узнать подробнее
        </Button>
      </Box>
    </>
  );
};

export default Details;
