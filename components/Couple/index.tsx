import Section from "@/components/Section"
import { TextCenter } from "@/components/TextCenter"

export default function Couple(){
  return (
    <Section className="bg-whiteish place-items-center">
      <TextCenter className="mb-8 text-primary">بِسْــــــــــــــــــمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ</TextCenter>

      <TextCenter className="mb-4 text-blackish">Assalamu'alaikum Wr. Wb.</TextCenter>

      <TextCenter className="mb-8 max-w-lg text-blackish">Dengan memanjatkan puji dan syukur ke hadirat Allah SWT, serta dengan memohon Ridho-Nya kami bermaksud mengadakan acara pernikahan putra-putri kami:</TextCenter>

      <div>
        <div>
          <TextCenter className="mb-2 font-amita text-2xl text-blackish">Eindita Septiara</TextCenter>
          <TextCenter className="mb-2 text-blackish">Putri pertama dari Bapak Nikita Saladin dan Ibu Herita</TextCenter>
        </div>
        <TextCenter className="my-4 font-cormorant font-bold text-5xl text-primary">&amp;</TextCenter>
        <div>
          <TextCenter className="mb-2 font-amita text-2xl text-blackish">Faiz Azmi Rekatama</TextCenter>
          <TextCenter className="mb-2 text-blackish">Putra pertama dari Bapak Ferry Kortita dan Ibu Titin Soleha</TextCenter>
        </div>
      </div>
    </Section>
  )
}
