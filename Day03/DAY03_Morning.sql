/*Exo 1*/
SELECT ALL FROM members;
SELECT name, role FROM members;
SELECT ALL FROM members WHERE role = 'manager';

/*Exo 2*/
SELECT m.name AS member_name, p.name AS project_name
FROM members m, projects p, memberprojectrelation mp
WHERE m.id = mp.memberid AND p.id = mp.projectid
ORDER BY m.name ASC ;

SELECT m.name
FROM projects p, members m, memberprojectrelation mp
WHERE p.name='Researchshare' AND p.id = mp.projectid AND m.id = mp.memberid;

SELECT p.name
FROM members m, projects p, memberprojectrelation mp
WHERE p.id = mp.projectid AND mp.memberid = m.id AND m.email='petit.lucas@epitech.eu'
ORDER BY p.pole ASC;

/*Exo 3*/
INSERT INTO members(id, name, email, role) VALUES (100, 'robert', 'robert.letruc@email.com', 'manager');
DELETE FROM projects WHERE status='done';
INSERT INTO memberprojectrelation(memberid, projectid) VALUES (100, (SELECT id FROM projects WHERE name='PoCZero'));

/*Exo 4*/
SELECT count(*) FROM members;

SELECT pole, count(name) FROM projects GROUP BY pole;

SELECT p.pole, p.name, count(m.id)
FROM projects p, members m, memberprojectrelation mp
WHERE m.id = mp.memberid AND p.id = mp.projectid
GROUP BY p.name, p.pole
ORDER BY count(m.id) ASC;

/*Exo 5*/
SELECT name FROM members WHERE email LIKE '%martin%' ORDER BY name ASC;