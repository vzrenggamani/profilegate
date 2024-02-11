import { MetadataRoute } from 'next'
import data_opensource from '@/data/opensource.json'

const URL = 'https://reng.my.id'

function getDataverseSitemap() {
  return data_opensource
    .filter(
      (item) => item.category === 'dataset' || item.category === 'Dataset'
    )
}

export default function sitemap(): MetadataRoute.Sitemap {

  // static sitemap
  const routes = [
    '',
    '/dataverse',
    '/ipr'].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date(),
    priority: 0.5,
  }))

  const dataverse = getDataverseSitemap()
  const dataversemap = dataverse.map((item) => ({
    url: `${URL}/dataverse/${item.id}`,
    lastModified: new Date(),
    priority: 0.5,
  }))


  return [ ...routes, ...dataversemap]
}
