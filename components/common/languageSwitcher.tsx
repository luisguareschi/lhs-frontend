import { useTranslation } from "react-i18next";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  return (
    <Select value={i18n.language} onValueChange={i18n.changeLanguage}>
      <SelectTrigger
        className="w-32 focus:ring-0 focus:ring-offset-0 text-slate-700 font-medium 
      focus:ring-transparent rounded-full justify-center gap-2"
      >
        <Globe className="w-4 h-4" />
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="es">Español</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LanguageSwitcher;
