import StripePaymentForm from '@components/common/form/stripe-inline-form';
import { useCart } from '@contexts/cart/cart.context';


const StripeCheckoutInlineForm = ({ lang }: { lang: string }) => {
  const { t } = useTranslation(lang);
  const { total } = useCart();
  return (
    <StripePaymentForm item={{ price: total, buttonText: t('text-pay-now') }} />
  );
};

export default StripeCheckoutInlineForm;
