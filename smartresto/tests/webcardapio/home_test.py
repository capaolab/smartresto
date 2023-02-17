from django.test import TestCase
from django.urls import reverse


class HomeTestCase(TestCase):
    def test_webcardapio_home_page_render(self):
        """The index page loads properly"""
        home_url = reverse('webcardapio:home')
        self.assertEqual(home_url, '/')
