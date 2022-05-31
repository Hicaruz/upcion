import React, { FC } from 'react'
import { Field, ErrorMessage, useFormikContext } from 'formik'

const Step4: FC = () => {

  const deps = ["GUATEMALA", "EL PROGRESO", "SACATEPEQUEZ", "CHIMALTENANGO", "ESCUINTLA", "SANTA ROSA", "SOLOLA", "TOTONICAPAN", "QUETZALTENANGO", "SUCHITEPEQUEZ", "RETALHULEU", "SAN MARCOS", "HUEHUETENANGO", "QUICHE", "BAJA VERAPAZ", "ALTA VERAPAZ", "PETEN", "IZABAL", "ZACAPA", "CHIQUIMULA", "JALAPA", "JUTIAPA"];
  const munis: any = {
    guatemala: ["GUATEMALA", "SANTA CATARINA PINULA", "SAN JOSE PINULA", "SAN JOSE DEL GOLFO", "PALENCIA", "CHINAUTLA", "SAN PEDRO AYAMPUC", "MIXCO", "SAN PEDRO SACATEPEQUEZ", "SAN JUAN SACATEPEQUEZ", "SAN RAYMUNDO", "CHUARRANCHO", "FRAIJANES", "AMATITLAN", "VILLA NUEVA", "VILLA CANALES", "SAN MIGUEL PETAPA"],
    'el progreso': ["GUASTATOYA", "MORAZAN", "SAN AGUSTIN ACASAGUASTLAN", "SAN CRISTOBAL ACASAGUASTLAN", "EL JICARO", "SANSARE", "SANARATE", "SAN ANTONIO LA PAZ"],
    sacatepequez: ["ANTIGUA", "JOCOTENANGO", "PASTORES", "SUMPANGO", "SANTO DOMINGO XENACOJ", "SANTIAGO SACATEPEQUEZ", "SAN BARTOLOME MILPAS ALTAS", "SAN LUCAS SACATEPEQUEZ", "SANTA LUCIA MILPAS ALTAS", "MAGDALENA MILPAS ALTAS", "SANTA MARIA DE JESUS", "CIUDAD VIEJA", "SAN MIGUEL DUENAS", "ALOTENANGO", "SAN ANTONIO AGUAS CALIENTES", "SANTA CATARINA BARAHONA"],
    chimaltenango: ["CHIMALTENANGO", "SAN JOSE POAQUIL", "SAN MARTIN JILOTEPEQUE", "SAN JUAN COMALAPA", "SANTA APOLONIA", "TECPAN GUATEMALA", "PATZUN", "SAN MIGUEL POCHUTA", "PATZICIA", "SANTA CRUZ BALANYA", "ACATENANGO", "SAN PEDRO YEPOCAPA", "SAN ANDRES ITZAPA", "PARRAMOS", "ZARAGOZA", "EL TEJAR"],
    escuintla: ["ESCUINTLA", "SANTA LUCIA COTZUMALGUAPA", "LA DEMOCRACIA", "SIQUINALA", "MASAGUA", "TIQUISATE", "LA GOMERA", "GUANAGAZAPA", "SAN JOSE", "IZTAPA", "PALIN", "SAN VICENTE PACAYA"],
    'santa rosa': ["CUILAPA", "BARBERENA", "SANTA ROSA DE LIMA", "CASILLAS", "SAN RAFAEL LAS FLORES", "ORATORIO", "SAN JUAN TECUACO", "CHIQUIMULILLA", "TAXISCO", "SANTA MARIA IXHUATAN", "GUAZACAPAN", "SANTA CRUZ NARANJO", "municipio NUEVO VIÑAS", "NUEVA SANTA ROSA"],
    solola: ["SOLOLA", "SAN JOSE CHACAYA", "SANTA MARIA VISITACION", "SANTA LUCIA UTATLAN", "NAHUALA", "SANTA CATARINA IXTAHUACAN", "SANTA CLARA LA LAGUNA", "CONCEPCION", "SAN ANDRES SEMETABAJ", "PANAJACHEL", "SANTA CATARINA PALOPO", "SAN ANTONIO PALOPO", "SAN LUCAS TOLIMAN", "SANTA CRUZ LA LAGUNA", "SAN PABLO LA LAGUNA", "SAN MARCOS LA LAGUNA", "SAN JUAN LA LAGUNA", "SAN PEDRO LA LAGUNA", "SANTIAGO ATITLAN"],
    totonicapan: ["TOTONICAPAN", "SAN CRISTOBAL TOTONICAPAN", "SAN FRANCISCO EL ALTO", "SAN ANDRES XECUL", "MOMOSTENANGO", "SANTA MARIA CHIQUIMULA", "SANTA LUCIA LA REFORMA", "SAN BARTOLO AGUAS CALIENTES"],
    quetzaltenango: ["QUETZALTENANGO", "SALCAJA", "OLINTEPEQUE", "SAN CARLOS SIJA", "SIBILIA", "CABRICAN", "CAJOLA", "SAN MIGUEL SIGUILA", "SAN JUAN OSTUNCALCO", "SAN MATEO", "CONCEPCION CHIQUIRICHAPA", "SAN MARTIN SACATEPEQUEZ", "ALMOLONGA", "CANTEL", "HUITAN", "ZUNIL", "COLOMBA COSTA CUCA", "SAN FRANCISCO LA UNION", "EL PALMAR", "COATEPEQUE", "GENOVA COSTA CUCA", "FLORES COSTA CUCA", "LA ESPERANZA", "PALESTINA DE LOS ALTOS"],
    suchitepequez: ["MAZATENANGO", "CUYOTENANGO", "SAN FRANCISCO ZAPOTITLAN", "SAN BERNARDINO", "SAN JOSE EL IDOLO", "SANTO DOMINGO SUCHITEPEQUEZ", "SAN LORENZO", "SAMAYAC", "SAN PABLO JOCOPILAS", "SAN ANTONIO SUCHITEPEQUEZ", "SAN MIGUEL PANAM", "SAN GABRIEL", "CHICACAO", "PATULUL", "SANTA BARBARA", "SAN JUAN BAUTISTA", "SANTO TOMAS LA UNION", "ZUNILITO", "municipio NUEVO", "RIO BRAVO"],
    retalhuleu: ["RETALHULEU", "SAN SEBASTIAN", "SANTA CRUZ MULUA", "SAN MARTIN ZAPOTITLAN", "SAN FELIPE", "SAN ANDRES VILLA SECA", "CHAMPERICO", "NUEVO SAN CARLOS", "EL ASINTAL"],
    'san marcos': ["SAN MARCOS", "SAN PEDRO SACATEPEQUEZ", "SAN ANTONIO SACATEPEQUEZ", "COMITANCILLO", "SAN MIGUEL IXTAHUACAN", "CONCEPCION TUTUAPA", "TACANA", "SIBINAL", "TAJUMULCO", "TEJUTLA", "SAN RAFAEL PIE DE LA CUESTA", "NUEVO PROGRESO", "EL TUMBADOR", "SAN JOSE EL RODEO", "MALACATAN", "CATARINA", "AYUTLA (TECUN UMAN)", "OCOS", "SAN PABLO", "EL QUETZAL", "LA REFORMA", "PAJAPITA", "IXCHIGUAN", "SAN JOSE OJETENAN", "SAN CRISTOBAL CUCHO", "SIPACAPA", "ESQUIPULAS PALO GORDO", "RIO BLANCO", "SAN LORENZO"],
    huehuetenango: ["HUEHUETENANGO", "CHIANTLA", "MALACATANCITO", "CUILCO", "NENTON", "SAN PEDRO NECTA", "JACALTENANGO", "SAN PEDRO SOLOMA", "SAN ILDEFONSO IXTAHUACAN", "SANTA BARBARA", "LA LIBERTAD", "LA DEMOCRACIA", "SAN MIGUEL ACATAN", "SAN RAFAEL LA INDEPENDENCIA", "TODOS SANTOS CUCHUMATAN", "SAN JUAN ATITAN", "SANTA EULALIA", "SAN MATEO IXTATAN", "COLOTENANGO", "SAN SEBASTIAN HUEHUETENANGO", "TECTITAN", "CONCEPCION HUISTA", "SAN JUAN IXCOY", "SAN ANTONIO HUISTA", "SAN SEBASTIAN COATAN", "SANTA CRUZ BARILLAS", "AGUACATAN", "SAN RAFAEL PETZAL", "SAN GASPAR IXCHIL", "SANTIAGO CHIMALTENANGO", "SANTA ANA HUISTA", "UNIÓN CANTINIL"],
    quiche: ["SANTA CRUZ DEL QUICHE", "CHICHE", "CHINIQUE", "ZACUALPA", "CHAJUL", "STO TOMAS CHICHICASTENANGO", "PATZITE", "SAN ANTONIO ILOTENANGO", "SAN PEDRO JOCOPILAS", "CUNEN", "SAN JUAN COTZAL", "JOYABAJ", "NEBAJ", "SAN ANDRES SAJCABAJA", "SAN MIGUEL USPANTAN", "SACAPULAS", "SAN BARTOLOME JOCOTENANGO", "CANILLA", "CHICAMAN", "IXCAN", "PACHALUN", "PLAYA GRANDE"],
    'baja verapaz': ["SALAMA", "SAN MIGUEL CHICAJ", "RABINAL", "CUBULCO", "GRANADOS", "SANTA CRUZ EL CHOL", "SAN JERONIMO", "PURULHA"],
    'alta verapaz': ["COBAN", "SANTA CRUZ VERAPAZ", "SAN CRISTOBAL VERAPAZ", "TACTIC", "TAMAHU", "SAN MIGUEL TUCURU", "PANZOS", "SENAHU", "SAN PEDRO CARCHA", "SAN JUAN CHAMELCO", "LANQUIN", "SANTA MARIA CAHABON", "CHISEC", "CHAHAL", "FRAY BARTOLOME DE LAS CASAS", "LA TINTA", "RAXRUHÁ"],
    peten: ["FLORES", "SAN JOSE", "SAN BENITO", "SAN ANDRES", "LA LIBERTAD", "SAN FRANCISCO", "SANTA ANA", "DOLORES", "SAN LUIS", "SAYAXCHE", "MELCHOR DE MENCOS", "POPTUN"],
    izabal: ["PUERTO BARRIOS", "LIVINGSTON", "EL ESTOR", "MORALES", "LOS AMATES"],
    zacapa: ["ZACAPA", "ESTANZUELA", "RIO HONDO", "GUALAN", "TECULUTAN", "USUMATLAN", "CABANAS", "SAN DIEGO", "LA UNION", "HUITE"],
    chiquimula: ["CHIQUIMULA", "SAN JOSE LA ARADA", "SAN JUAN LA ERMITA", "JOCOTAN", "CAMOTAN", "OLOPA", "ESQUIPULAS", "CONCEPCION LAS MINAS", "QUEZALTEPEQUE", "SAN JACINTO", "IPALA"],
    jalapa: ["JALAPA", "SAN PEDRO PINULA", "SAN LUIS JILOTEPEQUE", "SAN MANUEL CHAPARRON", "SAN CARLOS ALZATATE", "MONJAS", "MATAQUESCUINTLA"],
    jutiapa: ["JUTIAPA", "EL PROGRESO", "SANTA CATARINA MITA", "AGUA BLANCA", "ASUNCION MITA", "YUPILTEPEQUE", "ATESCATEMPA", "JEREZ", "EL ADELANTO", "ZAPOTITLAN", "COMAPA", "JALPATAGUA", "CONGUACO", "MOYUTA", "PASACO", "SAN JOSE ACATEMPA", "QUESADA"]
  }


  const {
    values,
  }: any = useFormikContext();

  return (
    <div className='w-100'>

      <div className='fv-row mb-10'>
        <div className='row'>
          <div className='col-md-6 col-sm-12'>
            <label className='form-label required'>Primer Apellido</label>

            <Field name='ben_fisrt_last_name' className='form-control form-control-lg form-control-solid' />
            <div className='text-danger mt-2'>
              <ErrorMessage name='ben_fisrt_last_name' />
            </div>
          </div>
          <div className='col-md-6 col-sm-12'>
            <label className='form-label required'>Segundo Apellido</label>

            <Field name='ben_second_last_name' className='form-control form-control-lg form-control-solid' />
            <div className='text-danger mt-2'>
              <ErrorMessage name='ben_second_last_name' />
            </div>
          </div>
        </div>
      </div>

      <div className='fv-row mb-10'>
        <div className='row'>
          <div className='col-md-6 col-sm-12'>
            <label className='form-label required'>Primer Nombre</label>

            <Field name='ben_first_name' className='form-control form-control-lg form-control-solid' />
            <div className='text-danger mt-2'>
              <ErrorMessage name='ben_first_name' />
            </div>
          </div>
          <div className='col-md-6 col-sm-12'>
            <label className='form-label required'>Segundo Nombre</label>

            <Field name='ben_second_name' className='form-control form-control-lg form-control-solid' />
            <div className='text-danger mt-2'>
              <ErrorMessage name='ben_second_name' />
            </div>
          </div>
        </div>
      </div>

      <div className='fv-row mb-10'>
        <div className='row'>
          <div className='col-md-6 col-sm-12'>
            <label className='form-label required'>Fecha de Nacimiento</label>

            <Field type="date" name='ben_born_date' className='form-control form-control-lg form-control-solid' />
            <div className='text-danger mt-2'>
              <ErrorMessage name='ben_born_date' />
            </div>
          </div>
          <div className='col-md-6 col-sm-12'>
            <label className='form-label required'>DPI</label>

            <Field name='ben_personal_document' className='form-control form-control-lg form-control-solid' />
            <div className='text-danger mt-2'>
              <ErrorMessage name='ben_personal_document' />
            </div>
          </div>
        </div>
      </div>
      <div className='fv-row mb-10'>
        <label className='form-label'>Direccion Completa</label>

        <Field
          as='textarea'
          name='ben_address'
          className='form-control form-control-lg form-control-solid'
          rows={2}
        ></Field>
      </div>
      <div className='fv-row mb-10'>
        <div className='row'>
          <div className='col-md-6 col-sm-12'>
            <label className='form-label required'>Departamento</label>

            <Field
              as='select'
              name='ben_departament'
              className='form-select form-select-lg form-select-solid'
            >
              <option></option>

              {deps.map((d, i) => (
                <option key={i} value={d}>{d}</option>

              ))}

            </Field>
            <div className='text-danger mt-2'>
              <ErrorMessage name='ben_departament' />
            </div>
          </div>
          <div className='col-md-6 col-sm-12'>
            <label className='form-label required'>Municipio</label>

            <Field
              disabled={!values.departament}
              as='select'
              name='ben_municip'
              className='form-select form-select-lg form-select-solid'
            >
              <option></option>

              {(values.departament ? munis[values.departament.toLowerCase()] : []).map((d: any, i: any) => (
                <option key={i} value={d}>{d}</option>

              ))}

            </Field>
            <div className='text-danger mt-2'>
              <ErrorMessage name='ben_municip' />
            </div>
          </div>
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label required'>Correo Electronico</label>

        <Field type="email" name='ben_email' className='form-control form-control-lg form-control-solid' />

        <div className='text-danger mt-2'>
          <ErrorMessage name='ben_email' />
        </div>
      </div>



      <div className='fv-row mb-10'>
        <div className='row'>
        
          <div className='col-md-6 col-sm-12'>
            <label className='form-label required'>Celular / Movil</label>

            <Field name='ben_mobile_phone' className='form-control form-control-lg form-control-solid' />
            <div className='text-danger mt-2'>
              <ErrorMessage name='ben_mobile_phone' />
            </div>
          </div>
          <div className='col-md-6 col-sm-12'>
            <label className='form-label required'>Porcentaje</label>

            <Field name='ben_percent' disabled className='form-control form-control-lg form-control-solid' />
            <div className='text-danger mt-2'>
              <ErrorMessage name='ben_percent' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Step4 }
