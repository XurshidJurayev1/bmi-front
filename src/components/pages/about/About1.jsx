import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const About1 = () => {

  const data = [{
    img: 'https://preview.colorlib.com/theme/webuni/img/categories/1.jpg',
    title: 'it dasturlash',
    text: 'Zamonaviy dasturlash tillari va texnologiyalari',
    count: '10',
  }, {
    img: 'https://preview.colorlib.com/theme/webuni/img/categories/2.jpg',
    title: 'web dizayn',
    text: 'Bu bo\'limda figma kabi dasturlarni o\'rganishingiz mumkin',
    count: '5',
  }, {
    img: 'https://preview.colorlib.com/theme/webuni/img/categories/3.jpg',
    title: 'Illustratsiya va chizmachilik',
    text: 'Bu bo\'limda rastrli, vektorli va froktal grafikani bir nechta dasturlarini o\'rganish mumkin',
    count: '3',
  }, {
    img: 'https://preview.colorlib.com/theme/webuni/img/categories/4.jpg',
    title: 'ijtimoiy tarmoqlar',
    text: 'SMM ',
    count: '1',
  }, {
    img: 'https://preview.colorlib.com/theme/webuni/img/categories/5.jpg',
    title: 'photoshop',
    text: 'Adobe PhotoShop dasturini haqida',
    count: '1',
  }, // {
    //   img: 'https://preview.colorlib.com/theme/webuni/img/categories/6.jpg',
    //   title: 'kriptovalyutalar',
    //   text: 'Kriptobirjala',
    //   count: '25',
    // },
  ];


  return (<Container maxWidth="lg" sx={{
      mt: '90px', mb: '60px',
    }}>
      <Typography variant="h3" sx={{ textAlign: 'center', mb: '20px' }}>
        Bizning kurs toifalari
      </Typography>
      <Typography variant="body1" sx={{ textAlign: 'center', mb: 7 }}>
        Bizning platformamiz orqali siz har xil kategoriyalar bo'yicha kurslarni o'rganishingiz mumkin. O'rgangan
        kurslaringiz doirasida test savollariga javob berasiz
      </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {data.map((item, index) => (<Grid item xs={2} sm={4} md={4} key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <Link to="/courses">
                <CardMedia
                  component="img"
                  height="140"
                  image={item.img}
                  alt={item.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div"
                              sx={{ textTransform: 'capitalize' }}>{item.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{item.text}</Typography>
                </CardContent>
                <CardActions>
                  <Button variant="text">{item.count} - kurslar</Button>
                </CardActions>
              </Link>
            </Card>
          </Grid>))}
      </Grid>
    </Container>);
};

export default About1;