# gjerajs
Bugs:

  1) Kur kryhet nderrimi i pozicionit te dy diveve, me raste, ndodh qe permjatja e njerit div per marre permbajtjen e divit tjeter. P.sh.: Ne nderrimin e vendeve te 
  contDiv0 dhe contDiv1, gjithone kur ka me shume se dy dive te krijuara, nese duam te nderrojme vendet e contDiv0 me contDiv1, ose anasjelltas, njeri nga keta div do
  kopjoje permabjtej e divit tjeter (ose njeri div i mbivendos permbajtjen e vet divit tjeter). Me pas, cdo div tjeter qe behet swap me divin e pare ose te dyte ose do 
  marre vleren e divit te pare ose te dyte, ose do i jave vleren e vet divit te pare ose te dyte (ne varesi se me ke po behet swap).
  
  2) Divet qe nderrojne vendet humbasin funksinalitetet e butonit per fshirjen e divit.
  
Funksionalitete per te shtuar:

  1) Permbajtjet e divit qendror duhet te reflektohen ted divi anesor ne menyre te permbledhur.
  
  2) Nese divet e shkembyeshme tek divi qendror ndryshojne vendet, permbajtjet perkatese tek divi anesor gjithashtu duhet te ndyshojne vendet.

Tools qe kam gjetur:

  	https://shopify.github.io/draggable/examples/flexbox.html
