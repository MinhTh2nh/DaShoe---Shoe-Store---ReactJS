import config from '~/config';

//layouts
import { DefaultLayout, HeaderOnly } from '~/components/Layout';
import AdminLayout from '~/components/Layout/AdminLayout/AdminLayout';

//Pages
import Home from '~/pages/Home';
import Product from '~/pages/Product';
import Male from '~/pages/Male/Male';
import Female from '~/pages/Female';
import Profile from '~/pages/Profile';
import ProductItem from '~/pages/ProductItem/ProductItem';
import Login from '~/pages/Login';
import Register from '~/pages/Resgister';
import CustomerManagement from '~/pages/CustomerManagement';
import ProductManagement from '~/pages/ProductManagement';
import SupplierManagement from '~/pages/SuppilerManagement/SupplierManagement';
import InventoryManagement from '~/pages/InventoryManagement/InventoryManagement';
import InvoiceManagement from '~/pages/InvoiceManagement/InvoiceManagement';
import Report from '~/pages/Report/Report';

//public Routes
const publicRoutes = [
  { path: config.routes.home, component: Home, layout: HeaderOnly },
  { path: config.routes.product, component: Product, layout: HeaderOnly },
  { path: config.routes.male, component: Male, layout: HeaderOnly },
  { path: config.routes.female, component: Female, layout: HeaderOnly },
  { path: config.routes.profile, component: Profile, layout: HeaderOnly },
  { path: config.routes.productItem, component: ProductItem, layout: HeaderOnly },
  { path: config.routes.login, component: Login, layout: DefaultLayout },
  { path: config.routes.register, component: Register, layout: DefaultLayout },
  { path: config.routes.customermanagement, component: CustomerManagement, layout: AdminLayout },
  { path: config.routes.productmanagement, component: ProductManagement, layout: AdminLayout },
  { path: config.routes.suppliermanagement, component: SupplierManagement, layout: AdminLayout },
  { path: config.routes.inventorymanagement, component: InventoryManagement, layout: AdminLayout },
  { path: config.routes.invoicemanagement, component: InvoiceManagement, layout: AdminLayout },
  { path: config.routes.report, component: Report, layout: AdminLayout },
];

//private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
